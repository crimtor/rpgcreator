var express = require("express");
var router  = express.Router();
var Beer = require("../models/beer");
var Comment = require("../models/comment");
var middleware = require("../middleware");
var { isLoggedIn, checkUserBeer, checkUserComment, isAdmin, isSafe } = middleware; // destructuring assignment

// Define escapeRegex function for search feature
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

//INDEX - show all beers
router.get("/", function(req, res){
  if(req.query.search && req.xhr) {
      const regex = new RegExp(escapeRegex(req.query.search), 'gi');
      // Get all beers from DB
      Beer.find({name: regex}, function(err, allBeers){
         if(err){
            console.log(err);
         } else {
            res.status(200).json(allBeers);
         }
      });
  } else {
      // Get all beers from DB
      Beer.find({}, function(err, allBeers){
         if(err){
             console.log(err);
         } else {
            if(req.xhr) {
              res.json(allBeers);
            } else {
              res.render("beers/index",{beers: allBeers, page: 'beers'});
            }
         }
      });
  }
});

router.get("/brewery/:breweryname", function(req, res){
      // Get all beers from DB
      Beer.find().where('brewery').equals(req.params.breweryname).exec(function(err, beers) {
      if(err) {
        req.flash("error", "Something went wrong.");
        res.redirect("/");
      }
      res.render("brewery/show", {beers: beers});
    });
});

//CREATE - add new beer to DB
router.post("/", isLoggedIn, isSafe, function(req, res){
  // get data from form and add to beers array
  var brewery = req.body.brewery;
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var styl = req.body.style;
  var rating = req.body.rating;
  var author = {
      id: req.user._id,
      username: req.user.username
  };
  var cost = req.body.cost;
    
var newBeer = {brewery: brewery, name: name, image: image, description: desc, style: styl, rating: rating, cost: cost, author:author};
    // Create a new beer and save to DB
    Beer.create(newBeer, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to beers page
            req.flash('success', 'New Beer Created');
            res.redirect("/beers");
        }
    });
});

//NEW - show form to create new beer
router.get("/new", isLoggedIn, function(req, res){
   res.render("beers/new"); 
});

// SHOW - shows more info about one beer
router.get("/:id", function(req, res){
    //find the beer with provided ID
    Beer.findById(req.params.id).populate("comments").exec(function(err, foundBeer){
        if(err || !foundBeer){
            console.log(err);
            req.flash('error', 'Sorry, that beer does not exist!');
            return res.redirect('/beers');
        }
        //render show template with that beer
        res.render("beers/show", {beer: foundBeer});
    });
});

// EDIT - shows edit form for a beer
router.get("/:id/edit", isLoggedIn, checkUserBeer, function(req, res){
  //render edit template with that beer
  res.render("beers/edit", {beer: req.beer});
});

// PUT - updates beer in the database
router.put("/:id", isLoggedIn, checkUserBeer, isSafe, function(req, res){
    
    var newData = {brewery: req.body.brewery, name: req.body.name, image: req.body.image, description: req.body.description, style: req.body.style, rating: req.body.rating, cost: req.body.cost };
    Beer.findByIdAndUpdate(req.params.id, {$set: newData}, function(err, beer){
        if(err){
            req.flash("error", err.message);
            res.redirect("back");
        } else {
            req.flash("success", "Successfully Updated!");
            res.redirect("/beers/" + beer._id);
        }
    });
});

// DELETE - removes beer and its comments from the database
router.delete("/:id", isLoggedIn, checkUserBeer, function(req, res) {
    Comment.remove({
      _id: {
        $in: req.beer.comments
      }
    }, function(err) {
      if(err) {
          req.flash('error', err.message);
          res.redirect('/');
      } else {
          req.beer.remove(function(err) {
            if(err) {
                req.flash('error', err.message);
                return res.redirect('/');
            }
            req.flash('error', 'Beer Deleted!');
            res.redirect('/beers');
          });
      }
    });
});

module.exports = router;
const express = require("express");
const router  = express.Router({mergeParams: true});
const Beer = require("../models/beer");
const Comment = require("../models/comment");
const middleware = require("../middleware");
const { isLoggedIn, checkUserComment, isAdmin } = middleware;

//Comments New
router.get("/new", isLoggedIn, function(req, res){
    // find beer by id
    Beer.findById(req.params.id, function(err, beer){
        if(err){
            console.log(err);
        } else {
             res.render("comments/new", {beer: beer});
        }
    })
});

//Comments Create
router.post("/", isLoggedIn, function(req, res){
   //lookup beer using ID
   Beer.findById(req.params.id, function(err, beer){
       if(err){
           console.log(err);
           res.redirect("/beers");
       } else {
        Comment.create(req.body.comment, function(err, comment){
           if(err){
               console.log(err);
           } else {
               //add username and id to comment
               comment.author.id = req.user._id;
               comment.author.username = req.user.username;
               //save comment
               comment.save();
               beer.comments.push(comment);
               beer.save();
               req.flash('success', 'Created a comment!');
               res.redirect('/beers/' + beer._id);
           }
        });
       }
   });
});

router.get("/:commentId/edit", isLoggedIn, checkUserComment, function(req, res){
  res.render("comments/edit", {beer_id: req.params.id, comment: req.comment});
});

router.put("/:commentId", isLoggedIn, function(req, res){
   Comment.findOneAndUpdate(req.params.commentId, req.body.comment, function(err, comment){
       if(err){
          console.log(err);
           res.render("edit");
       } else {
           res.redirect("/beers/" + req.params.id);
       }
   }); 
});

router.delete("/:commentId", isLoggedIn, checkUserComment, function(req, res){
  // find beer, remove comment from comments array, delete comment in db
  Beer.findOneAndUpdate(req.params.id, {
    $pull: {
      comments: req.comment.id
    }
  }, function(err) {
    if(err){ 
        console.log(err)
        req.flash('error', err.message);
        res.redirect('/');
    } else {
        req.comment.remove(function(err) {
          if(err) {
            req.flash('error', err.message);
            return res.redirect('/');
          }
          req.flash('error', 'Comment deleted!');
          res.redirect("/beers/" + req.params.id);
        });
    }
  });
});

module.exports = router;
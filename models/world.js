var mongoose = require("mongoose");

var beerSchema = new mongoose.Schema({
   brewery: String,
   name: String,
   image: String,
   description: String,
   style: String,
   cost: Number,
   rating: Number,
   createdAt: { type: Date, default: Date.now },
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

module.exports = mongoose.model("Beer", beerSchema);
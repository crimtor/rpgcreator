var mongoose = require("mongoose");

var characterSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   orgin: String,
   power: Number,
   magic_level: Number,
   speed: Number,
   stamina: Number,
   health: Number,
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

module.exports = mongoose.model("Character", characterSchema);
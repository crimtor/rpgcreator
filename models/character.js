var mongoose = require("mongoose");

var characterSchema = new mongoose.Schema({
   name: { type: String, default: "Steve Dave"},
   race: { type: String, default: "Human"},
   sex: { type: String, default: "Male"},
   image: { type: String, default: ""},
   description: { type: String, default: "Just a small town boy, born and raised in south Detriot"},
   char_class: { type: String, default: "Warrior"},
   orgin: { type: String, default: "Hobbiton"},
   disposition: { type: String, default: "Happy"},
   force_prefrence: { type: String, default: "Light-Sided"},
   role: { type: String, default: "Melee"},
   group_style: { type: String, default: "Lone Wolf"},
   health_points: { type: Number, min: 1, max: 100, default: 50 },
   magic_points:  { type: Number, min: 1, max: 100, default: 50 },
   strength:  { type: Number, min: 1, max: 100, default: 50 },
   speed:  { type: Number, min: 1, max: 100, default: 50 },
   stamina: { type: Number, min: 1, max: 100, default: 50 },
   intellegence:  { type: Number, min: 1, max: 100, default: 50 },
   attack_type:  { type: String, default: "melee" },
   attack_power:  { type: Number, min: 1, max: 100, default: 50 },
   defense_power:  { type: Number, min: 1, max: 100, default: 50 },
   attack_rate:  { type: Number, min: 1, max: 100, default: 50 },
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
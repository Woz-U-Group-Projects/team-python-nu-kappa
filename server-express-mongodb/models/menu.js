"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
<<<<<<< Updated upstream
=======

<<<<<<< Updated upstream
>>>>>>> Stashed changes
let MenuSchema = new Schema({
  entree: {
    type: String
  },
  details:{
   type: String
  },
  description:{
    type: String
  },
  price:{
  type: Number
  }
<<<<<<< Updated upstream
=======
=======

var MenuSchema = new Schema({
  id: { type: Number, required: false },
  entree:{ type: String, required: false },
  details:{ type: String, required: false },
  description:{ type: String, required: false },
  price:{type:Number,required: true},
}, {
  timestamps: true,
>>>>>>> Stashed changes


>>>>>>> Stashed changes
});
module.exports = mongoose.model("Menu", MenuSchema);
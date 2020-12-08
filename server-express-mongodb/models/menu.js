"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var MenuSchema = new Schema({
  id: { type: Number, required: true },
  entree:{ type: String, required: true },
  details:{ type: String, required: true },
  description:{ type: String, required: true },
  price:{type:Number,required: true},
}, {
  timestamps: true,


});



module.exports = mongoose.model("Menu", MenuSchema);

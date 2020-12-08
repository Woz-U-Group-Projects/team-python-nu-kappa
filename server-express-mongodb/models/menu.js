"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

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


});



module.exports = mongoose.model("Menu", MenuSchema);

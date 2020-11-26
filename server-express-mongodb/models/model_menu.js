"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MenuSchema = new Schema({
  _id: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Sting, required: true },
  entree: { type: String, required: false },
  side: { type: String, required: false },
  drink: { type: String, required: false }
  
});

// Duplicate the ID field.
MenuSchema.virtual("id").get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
MenuSchema.set("toJSON", {
  virtuals: true
});

module.exports = mongoose.model("menu", MenuSchema);

"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MenuSchema = new Schema({
  entree: { type: String, required: false },
  side: { type: String,  required: false },
  dessert: { type: String, required: false },
  description: { type: String, required: true },
  price: { type: String, required: true}
});

// Duplicate the ID field.
MenuSchema.virtual("id").get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
MenuSchema.set("toJSON", {
  virtuals: true
});

module.exports = mongoose.model("Menu", MenuSchema);

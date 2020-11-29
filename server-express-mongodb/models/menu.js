"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var menuSchema = new Schema({
  entree: { type: String, required: false },
  side: { type: String,  required: false },
  dessert: { type: String, required: false },
  description: { type: String, required: true },
  price: { type: String, required: true}
});

// Duplicate the ID field.
menuSchema.virtual("id").get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
menuSchema.set("toJSON", {
  virtuals: true
});

module.exports = mongoose.model("menu", menuSchema);

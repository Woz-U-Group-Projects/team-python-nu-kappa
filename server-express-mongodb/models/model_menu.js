"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MenuSchema = new Schema({
  name: { type: String, required: true },
  complete: { type: Boolean, required: true }
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

const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  quote: { type: String, required: true, unique: true },
  rating: { type: Array, required: true },
  ip: { type: Array, required: true }
});

quoteSchema.set("toObject", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
  }
});



module.exports = mongoose.model("Quote", quoteSchema);
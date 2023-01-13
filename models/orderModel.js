const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: String,
  description: String,
  phoneNumber: String,
  location: String,
  category: {
    _id: { type: mongoose.Types.ObjectId, ref: "Category" },
    name: { type: String },
    description: { type: String },
  },
  date: Date,
  time: String,
});

module.exports = mongoose.model("Order", orderSchema);

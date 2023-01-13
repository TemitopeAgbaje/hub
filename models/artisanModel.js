const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artisanSchema = new Schema({
  name: String,
  description: String,
  phoneNumber: String,
  location: String,
  category: {
    _id: { type: mongoose.Types.ObjectId, ref: "Category" },
    name: { type: String },
    description: { type: String },
  },
});

module.exports = mongoose.model("Artisan", artisanSchema);

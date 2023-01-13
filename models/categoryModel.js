const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: String,
  description: String,
  group: {
    type: String,
    enum: ["Beauty and Cosmetics", "Domestic and Constructions"],
  },
});

module.exports = mongoose.model("Category", categorySchema);

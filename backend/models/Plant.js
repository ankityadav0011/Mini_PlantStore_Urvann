const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  categories: [{ type: String, required: true }],
  inStock: { type: Boolean, default: true },
});

module.exports = mongoose.model('Plant', plantSchema);

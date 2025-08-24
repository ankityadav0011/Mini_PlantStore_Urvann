const mongoose = require('mongoose');
const Plant = require('../models/Plant'); // Adjust path as needed
require('dotenv').config();

const plants = [
  { name: 'Money Plant', price: 199, categories: ['Indoor', 'Air Purifying', 'Home Decor'], inStock: true },
  { name: 'Aloe Vera', price: 299, categories: ['Indoor', 'Succulent', 'Air Purifying'], inStock: true },
  { name: 'Spider Plant', price: 249, categories: ['Indoor', 'Air Purifying'], inStock: true },
  { name: 'Snake Plant', price: 349, categories: ['Indoor', 'Air Purifying', 'Low Maintenance'], inStock: true },
  { name: 'Peace Lily', price: 399, categories: ['Indoor', 'Flowering', 'Air Purifying'], inStock: true },
  { name: 'Areca Palm', price: 499, categories: ['Indoor', 'Air Purifying'], inStock: true },
  { name: 'Fiddle Leaf Fig', price: 799, categories: ['Indoor', 'Decor'], inStock: true },
  { name: 'ZZ Plant', price: 350, categories: ['Indoor', 'Air Purifying', 'Low Maintenance'], inStock: true },
  { name: 'Bonsai Tree', price: 1200, categories: ['Indoor', 'Decor'], inStock: true },
  { name: 'Lucky Bamboo', price: 150, categories: ['Indoor', 'Air Purifying'], inStock: true },
  { name: 'Jade Plant', price: 299, categories: ['Indoor', 'Succulent'], inStock: true },
  { name: 'Rubber Plant', price: 450, categories: ['Indoor', 'Air Purifying'], inStock: true },
  { name: 'Cactus Mix', price: 350, categories: ['Indoor', 'Succulent'], inStock: true },
  { name: 'Palm Plant', price: 600, categories: ['Indoor', 'Outdoor', 'Air Purifying'], inStock: true },
  { name: 'Marigold', price: 99, categories: ['Outdoor', 'Flowering'], inStock: true },
  { name: 'Bougainvillea', price: 399, categories: ['Outdoor', 'Flowering'], inStock: true },
  { name: 'Chrysanthemum', price: 299, categories: ['Outdoor', 'Flowering'], inStock: true },
  { name: 'Tulsi Plant', price: 149, categories: ['Indoor', 'Medicinal'], inStock: true },
  { name: 'Herb Garden Pack', price: 500, categories: ['Indoor', 'Herbal'], inStock: true },
  { name: 'Money Plant in Pot', price: 399, categories: ['Indoor', 'Air Purifying'], inStock: true },
  { name: 'Aromatic Mint', price: 189, categories: ['Indoor', 'Herbal'], inStock: true },
  { name: 'Spider Plant in Pot', price: 279, categories: ['Indoor', 'Air Purifying'], inStock: true },
  { name: 'Orchid Flowering Plant', price: 999, categories: ['Indoor', 'Flowering'], inStock: true },
  { name: 'Geranium', price: 250, categories: ['Outdoor', 'Flowering'], inStock: true },
  { name: 'Jasmine Plant', price: 350, categories: ['Outdoor', 'Flowering', 'Fragrant'], inStock: true },
  { name: 'Curry Patta (Neem)', price: 199, categories: ['Outdoor', 'Medicinal'], inStock: true },
  { name: 'Christmas Cactus', price: 300, categories: ['Indoor', 'Succulent', 'Flowering'], inStock: true },
  { name: 'Snake Plant in Pot', price: 400, categories: ['Indoor', 'Air Purifying'], inStock: true },
  { name: 'Ficus Plant', price: 450, categories: ['Indoor', 'Air Purifying'], inStock: true },
  { name: 'Mini Bonsai Pack', price: 1300, categories: ['Indoor', 'Decor'], inStock: true },
];

const seedPlants = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Plant.deleteMany({});
    await Plant.insertMany(plants);
    console.log('Data seeded!');
    process.exit();
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedPlants();

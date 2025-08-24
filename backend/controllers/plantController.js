const Plant = require('../models/Plant');

// Get all plants with optional search/filter
const getPlants = async (req, res) => {
  try {
    const { search, category } = req.query;

    let query = {};

    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }

    if (category) {
      query.categories = { $regex: category, $options: 'i' };
    }

    const plants = await Plant.find(query).exec();
    res.json(plants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Add a new plant
const addPlant = async (req, res) => {
  try {
    const { name, price, categories, inStock } = req.body;

    if (!name || !price || !categories || !Array.isArray(categories)) {
      return res.status(400).json({ message: 'Invalid input' });
    }

    const plant = new Plant({
      name,
      price,
      categories,
      inStock,
    });

    await plant.save();

    res.status(201).json(plant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getPlants, addPlant };

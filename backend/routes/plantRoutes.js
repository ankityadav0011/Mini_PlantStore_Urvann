const express = require('express');
const router = express.Router();
const { getPlants, addPlant } = require('../controllers/plantController');

router.get('/', getPlants);
router.post('/', addPlant);

module.exports = router;

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Sale = require('../models/Sale');
const Forecast = require('../models/Forecast');

// GET all products
router.get('/', async (req, res, next) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.json({
            success: true,
            count: products.length,
            data: products
        });
    } catch (error) {
        next(error);
    }
});

// Test route to verify router is working
router.get('/test', (req, res) => {
    res.json({ message: 'Product routes are working correctly' });
});

// GET sales for specific product
router.get('/:id/sales', async (req, res) => {
    try {
        const sales = await Sale.find({ product_id: req.params.id });
        res.json(sales);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET latest forecast for specific product
router.get('/:id/forecast', async (req, res) => {
    try {
        const forecast = await Forecast.findOne({ product_id: req.params.id })
            .sort({ forecast_date: -1 })
            .limit(1);
        if (!forecast) {
            return res.status(404).json({ message: 'No forecast found' });
        }
        res.json(forecast);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

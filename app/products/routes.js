const mongoose = require('mongoose');
const express = require('express');
const Products = require('./../model/products');

const router = express.Router();

router.get('/', (req, res) => {
    Products.find({}, { _id: 0 }, (err, result) => {
        if (err) res.json({ response: {} });
        res.json({ response: { result } });
    });
});

router.get('/name/:name', (req, res) => {
    const name = req.params.name;
    Products.find({ title: new RegExp(name, 'ig') }, { _id: 0 }, (err, result) => {
        if (err) res.json({ response: {} });
        res.json({ response: { result } });
    });
});

router.get('/link', (req, res) => {
    const link = req.query.q;
    if (!link) {
        res.json({ response: {} });
    }
    Products.find({ link }, { _id: 0 }, (err, result) => {
        if (err) res.json({ response: {} });
        res.json({ response: { result } });
    });

});

module.exports = router;
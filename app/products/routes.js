const mongoose = require('mongoose');
const express = require('express');
const Products = require('./../model/products');

const router = express.Router();

router.get('/', (req, res) => {
    Products.find({}, {}, (err, result) => {
        if (err) res.json({ response: {}, error: err });
        res.json({ response: { result } });
    });
});

router.get('/name/:name', (req, res) => {
    const name = req.params.name;
    Products.findOne({ link: `/product/${name}` }, {}, (err, result) => {
        if (err) res.json({ response: {} });
        res.json({ response: { result } });
    });
});

router.get('/link', (req, res) => {
    const link = req.query.q;
    if (!link) {
        res.json({ response: {} });
    }
    Products.find({ link }, {}, (err, result) => {
        if (err) res.json({ response: {} });
        res.json({ response: { result } });
    });

});

router.get('/latest', (req, res) => {
    Products.find({}, {}, { sort: { _id: -1 }, limit: 3 }, (err, result) => {
        if (err) res.json({ response: {} });
        res.json({ response: { result } });
    });

});

module.exports = router;
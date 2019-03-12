const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Products = require('./app/model/products');
const productsRoute = require('./app/products/routes');

const app = express();

// mongoose.connect('mongodb://localhost:27017/haven', { useNewUrlParser: true });
mongoose.connect('mongodb://hgopi:zTMxQ6HHFd6bfgW@ds017205.mlab.com:17205/heroku_8wbkd9kw', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/test', (req, res) => {
    Products.find({ "link": "/product/arm-chair" }, (err, result) => {
        if (err) res.json({ response: { result: 'not found' } });
        res.json({ response: { result } });
    });

    console.log('Sent /test.');
});

app.use('/products', productsRoute);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(port));

console.log(`App is listening on port ${port}`);
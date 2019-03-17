const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Products = require('./app/model/products');
const productsRoute = require('./app/routes/products');
const adminRoute = require('./app/routes/admin');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

// mongoose.connect('mongodb://localhost:27017/haven', { useNewUrlParser: true });
mongoose.connect('mongodb://hgopi:zTMxQ6HHFd6bfgW@ds017205.mlab.com:17205/heroku_8wbkd9kw', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, 'admin/build')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/products', productsRoute);

app.use('/api', adminRoute);

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname + '/admin/build/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(port));

console.log(`App is listening on port ${port}`);
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    title: { type: Schema.Types.String, required: true },
    mainImage: { type: Schema.Types.String, required: true },
    subImage: { type: Schema.Types.String, required: false },
    link: { type: Schema.Types.String, required: true },
    price: { type: Schema.Types.Number, required: true },
    oldPrice: { type: Schema.Types.Number, required: false },
    category: { type: Schema.Types.String, required: true }
});

const Products = mongoose.model('Products', productsSchema, 'products');

module.exports = Products;

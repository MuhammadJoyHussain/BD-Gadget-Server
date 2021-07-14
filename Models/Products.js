const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create Schema
const ItemSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    file: [],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Product = mongoose.model('products', ItemSchema);
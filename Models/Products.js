const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create Schema
const ItemSchema = new Schema({
    key: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    seller: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Product = mongoose.model('products', ItemSchema);
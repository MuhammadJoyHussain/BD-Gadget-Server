const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create Schema
const ItemSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Product = mongoose.model('products', ItemSchema);
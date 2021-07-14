const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Review = mongoose.model('reviews', ItemSchema);
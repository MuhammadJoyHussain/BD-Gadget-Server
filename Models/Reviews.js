const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create Schema
const ReviewSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Product = mongoose.model('reviews', ReviewSchema);
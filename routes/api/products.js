const express = require('express');
const router = express.Router();

const Product = require('../../Models/Products');


router.get('/', (req, res) => {
    Product.find()
        .sort({ date: -1 })
        .then(products => res.json(products))
});


router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(products => res.json(products))
});




router.post('/', (req, res) => {
    const newProduct = new Product({
        productName: req.body.productName,
        price: req.body.price,
        file: req.body.file
    });
    newProduct.save().then(product => {
        res.json(product)
    });
});


router.delete('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(product => product.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})



module.exports = router;
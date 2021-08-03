const express = require('express');
const router = express.Router();

const Product = require('../../Models/Products');


router.get('/', (req, res) => {
    Product.find()
        .sort({ date: -1 })
        .then(products => res.json(products))
});

router.get('/:key', (req, res) => {
    Product.find(req.params.key)
        .then(products => res.json(products))
});

router.post('/', (req, res) => {
    const newProduct = new Product({
        key: req.body.key,
        name: req.body.name,
        seller: req.body.seller,
        img: req.body.img,
        price: req.body.price
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

router.post('/byKeys', (req, res) => {
    const productKeys = req.body;
    Product.find({ "key": { "$in": productKeys } })
      .then(product => res.json(product))
  })


module.exports = router;
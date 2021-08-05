const express = require('express');
const router = express.Router();


const Order = require('../../Models/Orders');
const Admin = require('../../Models/Admins');


router.post('/customer', (req, res) => {
    Admin.find({ email: req.body.email })
        .then(admins => {
            if (admins.length) {
                Order.find({})
                    .then(items => res.json(items))
            } else {
                Order.find({ email: req.body.email })
                    .then(items => res.json(items))
            }
        })

});


router.get('/', (req, res) => {
    Order.find({})
        .sort({ date: -1 })
        .then(items => res.json(items))
});



router.post('/', (req, res) => {
    const newItem = new Order({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        cart: req.body.cart
    });

    newItem.save().then(item => res.json(item));
});


router.delete('/:id', (req, res) => {
    Order.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})



module.exports = router;
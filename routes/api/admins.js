const express = require('express');
const router = express.Router();

const Admin = require('../../Models/Admins');

router.post('/email', (req, res) => {
    Admin.find({email: req.body.email})
        .then(items => {
            res.json(items)
        })
});

router.post('/', (req, res) => {
    const admin = new Admin({
        name: req.body.name,
        email: req.body.email
    });

    admin.save().then(item => res.json(item));
});


router.delete('/:id', (req, res) => {
    Admin.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
});





module.exports = router;
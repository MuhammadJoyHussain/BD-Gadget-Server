const express = require('express');
const router = express.Router();

const Admin = require('../../Models/Admins');


router.post('/', (req, res) => {
    Admin.find({email: req.body.email})
        .then(items => res.send(items.length > 0))
});

router.delete('/:id', (req, res) => {
    Admin.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
});





module.exports = router;
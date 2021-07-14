const express = require('express');
const router = express.Router();

const Home = require('../../Models/Home');


router.get('/', (req, res) => {
    Home.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});


router.post('/', (req, res) => {
    const newHome = new Home({
        openandclose: req.body.openandclose,
        location: req.body.location,
        phone: req.body.phone,
        story: req.body.story
    });

    newHome.save().then(item => res.json(item));
});


router.patch('/:id', (req, res) => {
    Home.findOneAndUpdate(req.params.id),
        {
            $set: { openandclose: req.body.openandclose, location: req.body.location, phone: req.body.phone, story: req.body.story }
        }
        .then(result => {
            console.log(result);
        })
});

router.delete('/:id', (req, res) => {
    Home.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})



module.exports = router;
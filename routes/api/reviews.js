const express = require('express');
const router = express.Router();


const Review = require('../../Models/Reviews');


router.get('/', (req, res) => {
    Review.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});



router.post('/', (req, res) => {
    const newReview = new Review({
        image: req.body.image,
        name: req.body.name,
        review: req.body.review
    });
    newReview.save().then(item => res.json(item));
});

router.delete('/:id', (req, res) => {
    Review.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})



module.exports = router;
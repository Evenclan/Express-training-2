const db = require('../db');
const express = require('express');
const app = express();
const router = express.Router();

router.route('/testimonials').get((req, res) => {
    res.json(db.testimonials);
});

router.route('/testimonials/random').get((req, res) => {

    const random = Math.ceil(Math.random() * db.testimonials.length) - 1;

    res.json(db.testimonials[random]);
});

router.route('/testimonials/:id').get((req, res) => {
    let requestID = parseInt(req.params.id);
    res.json(db.testimonials.find(element => element.id === requestID));
});

router.route('/testimonials').post((req, res) => {
    res.json({ message: 'OK' });
})

router.route('/testimonials/:id').put((req, res) => {
    res.json({ message: 'OK' });
})

router.route('/testimonials/:id').delete((req, res) => {
    res.json({ message: 'OK' });
})

module.exports = router;
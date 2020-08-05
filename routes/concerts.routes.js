const db = require('../db');
const express = require('express');
const app = express();
const router = express.Router();

router.route('/concerts').get((req, res) => {
    res.json(db.concerts);
});

router.route('/concerts/:id').get((req, res) => {
    let requestID = parseInt(req.params.id);
    res.json(db.concerts.find(element => element.id === requestID));
});

router.route('/concerts').post((req, res) => {
    res.json({ message: 'OK' });
})

router.route('/concerts/:id').delete((req, res) => {
    res.json({ message: 'OK' });
})

router.route('/concerts/:id').put((req, res) => {
    res.json({ message: 'OK' });
})

module.exports = router;
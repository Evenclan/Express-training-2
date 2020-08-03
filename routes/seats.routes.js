const db = require('./db');
const express = require('express');
const app = express();
const router = express.Router();

router.route('/seats').get((req, res) => {
    res.json(db.seats);
  });
  
  router.route('/seats/:id').get((req, res) => {
    let requestID = parseInt(req.params.id);
    res.json(db.seats.find(element => element.id === requestID));
  });
  
  router.route('/seats').post((req, res) => {
    res.json({ message: 'OK' });
  })
  
  router.route('/seats/:id').delete((req, res) => {
    res.json({ message: 'OK' });
  })
  
  router.route('/seats/:id').put((req, res) => {
    res.json({ message: 'OK' });
  })

  module.exports = router;
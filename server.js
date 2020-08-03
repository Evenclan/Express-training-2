const express = require('express');
const app = express();

const concerts = require('./routes/concerts.routes')
const seats = require('./routes/seats.routes')
const testimonials = require('./routes/testimonials.routes')

// const cors = require('cors');

// app.use(cors())
app.use('/', testimonials);
app.use('/', seats);
app.use('/', concerts);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found...'});
});
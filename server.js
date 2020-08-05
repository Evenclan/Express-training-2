const express = require('express');
const app = express();
const cors = require('cors');

const path = require('path');
const concerts = require('./routes/concerts.routes')
const seats = require('./routes/seats.routes')
const testimonials = require('./routes/testimonials.routes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use('/api', testimonials);
app.use('/api', seats);
app.use('/api', concerts);

app.use(express.static(path.join(__dirname, '/client/build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});


app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found...'});
});
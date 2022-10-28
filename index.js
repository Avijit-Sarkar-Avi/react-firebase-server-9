const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const places = require('./Data/place.json');
const hotels = require('./Data/hotel.json');

app.get('/', (req, res) => {
    res.send('Travel API running');
});

app.get('/place', (req, res) => {
    res.send(places);
});

app.get('/hotel', (req, res) => {
    res.send(hotels);
});

app.listen(port, () => {
    console.log('Travel API running on', port);
})

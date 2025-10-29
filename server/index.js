require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
const mongoose = require('mongoose');

// DB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Temporary restaurant data
const restaurants = [
  {
    _id: 'r1',
    name: 'sunsettt dinnerr',
    cuisine: 'Indian',
    address: 'MG Road',
  },
  { _id: 'r2', name: 'Pasta Palace', cuisine: 'Italian', address: 'Sector 12' },
];

app.get('/api/restaurants', (req, res) => {
  res.json(restaurants);
});

// Auth routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('API running on http://localhost:5000'));

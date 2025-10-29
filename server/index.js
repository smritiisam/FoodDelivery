// server.js (ESM)
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import authRoutes from './routes/auth.js'; // make sure this file uses `export default router;`

const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// DB connection
mongoose
  .connect('mongodb://127.0.0.1:27017/food_delivery')
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
app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('API running on http://localhost:5000'));

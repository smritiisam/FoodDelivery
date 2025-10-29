import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv';

const router = express.Router();

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const exisiting = await User.findOne({ email });
    if (exisiting)
      return res.status(406).json({ message: 'User already exists' });

    const hashed = await bcrypt.hash(password, 10);

    //while creating a new User object (instance) that follows the Mongoose schema you defined earlier
    //user → an object (instance) of the User model
    const user = new User({ name, email, password: hashed, role });
    await user.save();

    res.status(201).json({ message: 'SignUp Successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: 'User not found' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: 'Invalid Credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({
      token,
      user: { id: user._id, name: user.name, role: user.role },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

//signup test:
//  Invoke-RestMethod -Uri "http://localhost:5000/api/auth/signup" -Method POST -Headers @{ "Content-Type" = "application/json" } -Body '{"name":"Smriti","email":"smriti@example.com","password":"mysecurepassword","role":"customer"}'

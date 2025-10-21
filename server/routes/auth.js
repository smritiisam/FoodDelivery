// server/routes/auth.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// pretend "User" model; will make Mongoose model next
let users = [];

router.post("/signup", async (req, res) => {
  const { name, email, password, role = "customer" } = req.body;
  if (users.find((u) => u.email === email))
    return res.status(400).json({ message: "Email exists" });
  const hash = await bcrypt.hash(password, 10);
  const user = { id: users.length + 1, name, email, passwordHash: hash, role };
  users.push(user);
  res.json({ ok: true });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(401).json();
});

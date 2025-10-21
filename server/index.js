require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.get("/api/restaurants", (req, res) => {
  res.json([
    { _id: "r1", name: "Sunrise Diner", cuisine: "Indian", address: "MG Road" },
  ]);
});

app.listen(5000, () => console.log("API running on http://localhost:5000"));

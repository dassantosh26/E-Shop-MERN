/** @format */

import express from "express";

import products from "./data/products.js";

import dotenv from "dotenv";
// Load environment variables
dotenv.config(); //This step is required to acess env variable using vite
const port = process.env.VITE_PORT || 8000;
const app = express();

app.get("/", (req, res) => {
  res.send("Server Started...");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`Server Running on port ${port}`));

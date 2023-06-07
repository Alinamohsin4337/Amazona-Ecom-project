import express from "express";
import cors from "cors";
import data from "./data.js";

const app = express();

// Use the cors middleware
app.use(cors());

// Your routes go here
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

// Rest of your server setup code
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

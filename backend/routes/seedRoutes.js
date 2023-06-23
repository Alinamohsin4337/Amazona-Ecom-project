import express from "express";
import data from "../data.js";
import Product from "../models/productModel.js";

const SeedRouter = express.Router();

SeedRouter.get("/", async (req, res) => {
  try {
    console.log("Seed route handler called");

    await Product.deleteMany({});
    console.log("Existing products removed");

    const createdProducts = await Product.insertMany(data.products);
    console.log("New products inserted");

    res.send({ createdProducts });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed to seed data" });
  }
});

export default SeedRouter;

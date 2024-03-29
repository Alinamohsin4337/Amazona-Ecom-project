import express from "express";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import SeedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";
// import axios from "axios";

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("error", err.msg);
  });

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/api/keys/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
app.use("/api/users", userRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/seed", SeedRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "/project/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/project/build/index.html"));
// });
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);

  // const url = "/api/users/profile";

  // axios
  //   .get(url)
  //   .then((response) => {
  //     console.log("Response:", response.data);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
});

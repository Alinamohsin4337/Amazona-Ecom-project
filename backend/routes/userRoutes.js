import express from "express";
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";

import User from "../models/userModel.js";
import generateToken from "../utils.js";

const userRouter = express.Router();
userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);
userRouter.post(
  "/signup",
  expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res
        .status(400)
        .send({
          message: "Email already exists. Please use a different email.",
        });
      return;
    }

    const newUser = new User({
      name,
      email,
      password: bcrypt.hashSync(password),
    });

    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    });
  })
);

export default userRouter;

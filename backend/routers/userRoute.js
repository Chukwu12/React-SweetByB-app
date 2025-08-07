<<<<<<< HEAD
import express from "express";
import User from "../models/userModel.js";
import passport from "passport";

const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const newUser = new User({ userName, email, password });
    await newUser.save();

    req.login(newUser, (err) => {
      if (err) return res.status(500).json({ message: "Login after signup failed." });

      return res.json({ message: "User created and logged in.", user: newUser });
    });
  } catch (err) {
    res.status(500).json({ message: "Signup error", error: err.message });
  }
});

// Login route
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ message: "Logged in successfully.", user: req.user });
});

// Logout route
router.post("/logout", (req, res) => {
  req.logout(err => {
    if (err) return res.status(500).json({ message: "Logout failed." });
    res.json({ message: "Logged out successfully." });
  });
});
=======
// routes/userRoute.js
import express from 'express';
import * as userController from '../controllers/userController.js';  


const router = express.Router();

// Get Login Route
router.get('/login', userController.getLogin); 

// Post Login Route (Authentication)
router.post('/login', userController.postLogin);

// Get Signup Route
router.get('/signup', userController.getSignup);

// Post Signup Route (Create User)
router.post('/signup', userController.postSignup);

// Logout Route
router.get('/logout', userController.logout);
>>>>>>> c12718f69537c3ccc2acad518c4fe7f21444a91c

export default router;

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

export default router;

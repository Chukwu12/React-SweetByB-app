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

// Get Current User (for session persistence)
router.get('/me', userController.getCurrentUser);

// Logout Route
router.get('/logout', userController.logout);

export default router;

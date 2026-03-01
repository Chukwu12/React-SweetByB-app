import passport from 'passport';
import validator from 'validator';
import User from '../models/userModel.js';  // Corrected path to userModel.js

// Get Login page
export const getLogin = (req, res) => {
    if (req.user) {
        return res.json({ success: true, user: req.user });
    }
    res.json({ success: false, message: "Not authenticated" });
};

// Post Login
export const postLogin = (req, res, next) => {
    const validationErrors = [];
    if (!validator.isEmail(req.body.email)) 
        validationErrors.push({ msg: "Please enter a valid email address." });
    
    if (validator.isEmpty(req.body.password)) 
        validationErrors.push({ msg: "Password cannot be blank." });

    if (validationErrors.length) {
        return res.status(400).json({ success: false, message: validationErrors[0].msg });
    }
    req.body.email = validator.normalizeEmail(req.body.email, {
        gmail_remove_dots: false,
    });

    passport.authenticate("local", (err, user, info) => {
        if (err) {
            return next(err);
        }

        if (!user) {
            return res.status(401).json({ success: false, message: info.message || "Invalid credentials" });
        }

        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            if (process.env.NODE_ENV !== 'production') {
              console.log("✅ User logged in:", user.email);
            }
            res.json({ success: true, message: "Login successful!", user: user });
        });
    })(req, res, next);
};

// Logout
export const logout = (req, res) => {
    req.logout(function (err) {
        if (err) {
            return res.status(500).json({ success: false, message: "Logout error" });
        }
        req.session.destroy((err) => {
            if (err) {
                if (process.env.NODE_ENV !== 'production') {
                  console.error("Session destroy error:", err.message);
                }
            }
            req.user = null;
            res.json({ success: true, message: "Logged out successfully" });
        });
    });
};

// Get Signup page
export const getSignup = (req, res) => {
    if (req.user) {
        return res.json({ success: true, user: req.user });
    }
    res.json({ success: false, message: "Not authenticated" });
};

// Post Signup
export const postSignup = async (req, res, next) => {
  const validationErrors = [];

  if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: "Please enter a valid email address." });
  if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: "Password must be at least 8 characters long" });
  if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: "Passwords do not match" });

  if (validationErrors.length) {
        return res.status(400).json({ success: false, message: validationErrors[0].msg });
  }

  req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false });

  try {
    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email: req.body.email }, { userName: req.body.userName }]
    });

    if (existingUser) {
            return res.status(400).json({ success: false, message: "Account with that email or username already exists." });
    }

    // Create and save new user
    const user = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    });

    await user.save();

    // Passport login
    req.logIn(user, (err) => {
      if (err) return next(err);

      // Optional: store user info in session for debugging
      console.log("User logged in:", req.user);
            res.json({ success: true, message: "Signup successful!", user: user });
    });

  } catch (err) {
    console.error("Signup error:", err);
        return res.status(500).json({ success: false, message: "Server error during signup" });
  }
};

// Get current user (for session persistence)
export const getCurrentUser = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ success: false, message: "Not authenticated" });
    }
    // Fetch fresh user data from DB to ensure latest info
    const user = await User.findById(req.user.id || req.user._id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.json({ success: true, user: user });
  } catch (err) {
    console.error("getCurrentUser error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};


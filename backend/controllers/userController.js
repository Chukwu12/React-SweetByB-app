<<<<<<< HEAD
const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");

exports.getLogin = (req, res) => {
    if (req.user) {
        return res.redirect("/dashboard");
=======
import passport from 'passport';
import validator from 'validator';
import User from '../models/userModel.js';  // Corrected path to userModel.js

// Get Login page
export const getLogin = (req, res) => {
    if (req.user) {
        return res.redirect("/profile");
>>>>>>> c12718f69537c3ccc2acad518c4fe7f21444a91c
    }
    res.render("login", {
        title: "Login",
    });
};

<<<<<<< HEAD
exports.postLogin = (req, res, next) => {
    const validationErrors = [];
    if (!validator.isEmail(req.body.email))
        validationErrors.push({ msg: "Please enter a valid email address." });
    if (validator.isEmpty(req.body.password))
=======
// Post Login
export const postLogin = (req, res, next) => {
    const validationErrors = [];
    if (!validator.isEmail(req.body.email)) 
        validationErrors.push({ msg: "Please enter a valid email address." });
    
    if (validator.isEmpty(req.body.password)) 
>>>>>>> c12718f69537c3ccc2acad518c4fe7f21444a91c
        validationErrors.push({ msg: "Password cannot be blank." });

    if (validationErrors.length) {
        req.flash("errors", validationErrors);
        return res.redirect("/login");
    }
<<<<<<< HEAD
=======

>>>>>>> c12718f69537c3ccc2acad518c4fe7f21444a91c
    req.body.email = validator.normalizeEmail(req.body.email, {
        gmail_remove_dots: false,
    });

    passport.authenticate("local", (err, user, info) => {
        if (err) {
            return next(err);
        }

        if (!user) {
            req.flash("errors", { msg: info.message });  // Log the failure reason
            return res.redirect("/login");
        }

        console.log("Session before login:", req.session);
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            console.log("Session after login:", req.session); // Check if the user is in the session
            req.flash("success", { msg: "Success! You are logged in." });
<<<<<<< HEAD
            res.redirect(req.session.returnTo || "/");
=======
            res.redirect(req.session.returnTo || "/profile");
>>>>>>> c12718f69537c3ccc2acad518c4fe7f21444a91c
        });
    })(req, res, next);
};

<<<<<<< HEAD
exports.logout = (req, res) => {
=======
// Logout
export const logout = (req, res) => {
>>>>>>> c12718f69537c3ccc2acad518c4fe7f21444a91c
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        console.log('User has logged out.');
        req.session.destroy((err) => {
            if (err) {
<<<<<<< HEAD
                console.log("Error : Failed to destroy the session during logout.", err);
=======
                console.log("Error: Failed to destroy the session during logout.", err);
>>>>>>> c12718f69537c3ccc2acad518c4fe7f21444a91c
            }
            req.user = null;
            res.redirect("/");
        });
    });
};

<<<<<<< HEAD
exports.getSignup = (req, res) => {
=======
// Get Signup page
export const getSignup = (req, res) => {
>>>>>>> c12718f69537c3ccc2acad518c4fe7f21444a91c
    if (req.user) {
        return res.redirect("/profile"); // If the user is logged in, redirect to profile
    }
    res.render("signup", {
        title: "Create Account",
        errors: req.flash("errors"),
        inputData: req.body  // so you can pre-fill email/username
    });
};

<<<<<<< HEAD
exports.postSignup = (req, res, next) => {
    const validationErrors = [];
=======
// Post Signup
export const postSignup = async (req, res, next) => {
    const validationErrors = [];

    // Validate the inputs
>>>>>>> c12718f69537c3ccc2acad518c4fe7f21444a91c
    if (!validator.isEmail(req.body.email)) {
        validationErrors.push({ msg: "Please enter a valid email address." });
    }
    if (!validator.isLength(req.body.password, { min: 8 })) {
        validationErrors.push({ msg: "Password must be at least 8 characters long" });
    }
    if (req.body.password !== req.body.confirmPassword) {
        validationErrors.push({ msg: "Passwords do not match" });
    }

    // If there are validation errors, re-render the signup page with errors
    if (validationErrors.length) {
        req.flash("errors", validationErrors);
        return res.redirect("/signup");
    }

    req.body.email = validator.normalizeEmail(req.body.email, {
        gmail_remove_dots: false,
    });

<<<<<<< HEAD
    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
    });

    User.findOne(
        { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
        (err, existingUser) => {
            if (err) {
                return next(err);
            }

            if (existingUser) {
                req.flash("errors", {
                    msg: "Account with that email address or username already exists.",
                });
                return res.redirect("/signup"); // Correct path for signup
            }

            // Save the new user and log them in
            user.save((err) => {
                if (err) {
                    return next(err);
                }

                // Log in the newly created user
                req.logIn(user, (err) => {
                    if (err) {
                        return next(err);
                    }
                    res.redirect("/"); // Redirect to profile after successful signup
                });
            });
        }
    );
};
=======
    try {
        // Check if the email or username already exists
        const existingUser = await User.findOne({
            $or: [{ email: req.body.email }, { userName: req.body.userName }]
        });

        if (existingUser) {
            req.flash("errors", {
                msg: "Account with that email address or username already exists.",
            });
            return res.redirect("/signup"); // Correct path for signup
        }

        // Create a new user
        const user = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
        });

        // Save the new user
        await user.save();

        // Log in the newly created user
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            res.redirect("/profile"); // Redirect to profile after successful signup
        });

    } catch (err) {
        return next(err); // Handle any errors that occur during signup
    }
};
>>>>>>> c12718f69537c3ccc2acad518c4fe7f21444a91c

<<<<<<< HEAD
=======
import passport from 'passport';
>>>>>>> c12718f69537c3ccc2acad518c4fe7f21444a91c
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/userModel.js';



export default function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
      try {
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
<<<<<<< HEAD
          return done(null, false, { message: `Email ${email} not found.` });
=======
          return done(null, false, { msg: `Email ${email} not found.` });
>>>>>>> c12718f69537c3ccc2acad518c4fe7f21444a91c
        }
        const isMatch = await user.comparePassword(password);
        if (isMatch) {
          return done(null, user);
        }
        return done(null, false, { message: "Invalid email or password." });
      } catch (err) {
        return done(err);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
};
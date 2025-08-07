// userModel.js
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  userName: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  cartData: { type: Object, default: {} }
});


// Password hash middleware
UserSchema.pre('save', function save(next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

// Helper method for validating user's password
UserSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  cb
) {
  if (typeof cb !== 'function') {
    return new Promise((resolve, reject) => {
      bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) {
          reject(err);
        } else {
          resolve(isMatch);
        }
      });
    });
  }
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

const userModel = mongoose.model("User", UserSchema);
export default userModel;
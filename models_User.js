const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: { type: String, required: true },
  name: String,
  email: String,
  picture: String,
  googleBusinessAccount: { type: Object, default: null }
});

module.exports = mongoose.model("User", UserSchema);
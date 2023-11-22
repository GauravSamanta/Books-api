const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 20,
    minlength: 3,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});
userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.createJWT = function () {
  return jwt.sign({ userID: this._id, name: this.name }, "secret", {
    expiresIn: "30d",
  });
};

userSchema.methods.verifyUser = async function (givenPassword) {
  const match = await bcrypt.compare(givenPassword, this.password);
  return match;
};

module.exports = mongoose.model("user", userSchema);

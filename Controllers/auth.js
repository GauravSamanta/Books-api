const userSchema = require("../Models/user");

const Register = async (req, res) => {
  try {
    const user = await userSchema.create(req.body);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
const Login = (req, res) => {
  res.send("user Login");
};

module.exports = { Register, Login };

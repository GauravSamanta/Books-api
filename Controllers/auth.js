const userSchema = require("../Models/user");
const Register = async (req, res) => {
  try {
    const user = await userSchema.create(req.body);

    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ user: user.name, token });
  } catch (error) {
    console.log(error);
  }
};
const Login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(StatusCodes.UnauthenticatedError);
  }
  const temp = await userSchema.findOne({ email });
  if (!temp) {
    res.status(StatusCodes.UnauthenticatedError);
  }
  const isPasswordCorrect = await temp.verifyUser(password);
  if (!isPasswordCorrect) {
    res.status(StatusCodes.UnauthenticatedError);
  }
  // compare password
  const token = temp.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: temp.name }, token });
};

module.exports = { Register, Login };

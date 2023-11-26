const user = require("../Models/user");

const getUsers = async (req, res) => {
  const temp = await user.find();
  res.json(temp);
};
const getUserProfile = async (req, res) => {
  const temp = await user.findById(req.params.id);
  res.json(temp);
};
const editUsername = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const temp = await user.findByIdAndUpdate(id, { name: name });

  res.send("name changed");
};

module.exports = {
  getUserProfile,
  editUsername,
  getUsers,
};

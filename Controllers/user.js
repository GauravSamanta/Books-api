const mongoose=require('mongoose')


const getUserProfile = (req, res) => {
  res.send("All details about the user");
};
const editUsername = (req, res) => {
  res.send("name changed");
};

module.exports = {
  getUserProfile,
  editUsername
};

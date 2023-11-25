const mongoose=require('mongoose')
const user=require('../Models/user')



const getUsers =async (req, res) => {
  const temp=await user.find();
  res.json(temp);
};
const getUserProfile = (req, res) => {


  
};
const editUsername = (req, res) => {
  res.send("name changed");
};

module.exports = {
  getUserProfile,
  editUsername,
  getUsers,
};

const express = require("express");
const router = express.Router();
const { getUserProfile, editUsername,getUsers } = require("../Controllers/user");

router.route("/profile").get(getUsers);
router.route("/profile/:id").get(getUserProfile).patch(editUsername);


module.exports=router;
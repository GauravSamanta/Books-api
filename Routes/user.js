const express = require("express");
const router = express.Router();
const { getUserProfile, editUsername } = require("../Controllers/user");

router.route("/profile/:id").get(getUserProfile).patch(editUsername);


module.exports=router;
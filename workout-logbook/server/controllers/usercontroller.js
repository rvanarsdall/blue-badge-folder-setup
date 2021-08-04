const router = require("express").Router();
const User = require("../db").import("../models/user");

//User Signup
router.post("/create", function (req, res) {
  User.create({
    username: req.body.user.username,
    password: req.body.user.password,
  }).then(res.send("This is our user/create endpoint"));
});

module.exports = router;

const { response } = require("express");
const router = require("express").Router();

router.get("/practice", function (req, res) {
  res.send("This is a practice route");
});

module.exports = router;

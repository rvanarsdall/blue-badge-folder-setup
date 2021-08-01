let router = require("express").Router();

router.post("/add", function (req, res) {
  res.send("It works");
});

module.exports = router;

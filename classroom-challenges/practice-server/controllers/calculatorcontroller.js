let router = require("express").Router();

router.post("/add", function (req, res) {
  const { number1, number2 } = req.body;

  let response = { total: Number(number1) + Number(number2) };
  res.json(response);
});

module.exports = router;

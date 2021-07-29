let express = require("express"); //brings in express engine
let router = express.Router(); //brings in router

router.get("/practice", function (req, res) {
  res.send("Hey!! This is a practice route!");
});

router.get("/about", function (req, res) {
  res.send("This is the about route!");
});

module.exports = router; //exports the router

let express = require("express");
let app = express();
let testController = require("./controllers/testcontroller");
let calculatorController = require("./controllers/calculatorcontroller");

app.use(express.json());

app.use("/test", testController);

app.use("/calc", calculatorController);

app.listen(3000, function () {
  console.log("app is listening on port 3000");
});

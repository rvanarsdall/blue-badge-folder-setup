require("dotenv").config();
let express = require("express");
let app = express();
let sequelize = require("./db");
let journal = require("./controllers/logcontroller");
let user = require("./controllers/usercontroller");

sequelize.sync();

app.use(express.json());

app.use("/user", user);
app.use("/journal", journal);

app.listen(3000, function () {
  console.log("Workout-logbook app is listening on port 3000!");
});

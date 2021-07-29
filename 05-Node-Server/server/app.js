require("dotenv").config();
let express = require("express");
const app = express();
const sequelize = require("./db");
let journal = require("./controllers/journalcontroller");
let user = require("./controllers/usercontroller");
sequelize.sync();

app.use(express.json());

// app.use("/test", function (req, res) {
//   res.send("This is a test route");
// });

// app.use("/jaime", function (req, res) {
//   res.send("My name is Jaime and I am 44 years old!");
// });

//Have endpoint of journal/practice
//send a response from that endpoint (This is a practice route)

app.use("/journal", journal);

app.use("/about", journal);

app.use("/user", user);

app.listen(3000, function () {
  console.log("app is listening on port 3000");
});

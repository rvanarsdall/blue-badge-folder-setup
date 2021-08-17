require("dotenv").config();
let express = require("express");
let app = express();
let sequelize = require("./db");

let user = require("./controllers/usercontroller");
let journal = require("./controllers/journalcontroller");

sequelize.sync();
//sequelize.sync({force: true})

/*************************************************** */

// app.use("/test", function (req, res) {
//   res.send("This is a message from the test endpoint on the server!");
// });

// app.use("/jaime", function (req, res) {
//   res.send("My name is Jaime and I am 44 years old!");
// });
/******************************************************* */

//Have endpoint of journal/practice...practice is in journalcontroller
//send a response from that endpoint (This is a practice route)

app.use(require("./middleware/headers"));

app.use(express.json());

app.use("/user", user);

// app.use(require("./middleware/validate-session"));
app.use("/journal", journal);

app.use("/about", journal);

app.listen(3000, function () {
  console.log("App is listening on port 3000!");
});

require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');


let user = require('./controllers/usercontroller');
let journal = require('./controllers/journalcontroller');

sequelize.sync();
//sequelize.sync({force: true})
app.use(require('./middleware/headers'))
app.use(express.json())
app.use('/journal', journal)
app.use('/user', user)
// app.use(require('./middleware/validate-session'))

app.listen(3000, function() {
        console.log('App is listening on port 3000');
})
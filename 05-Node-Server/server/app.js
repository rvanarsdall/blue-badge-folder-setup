let express = require('express');
let app = express();

let sequelize = require('./db');

let journal = require('./controllers/journalcontroller');

let user = require('./controllers/usercontroller');

sequelize.sync();
//sequelize.sync({force: true})
app.use(express.json())
app.use('/journal', journal)
app.use('/user', user)

app.listen(4000, function() {
        console.log('App is listening on port 3001');
})
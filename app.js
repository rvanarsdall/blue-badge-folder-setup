let express = require('express');
let app = express()
let sequelize = require('./db');


let workout = require('./controllers/workoutController')
let user = require('./controllers/userController')

sequelize.sync();
//sequelize.sync({force: true})
app.use(express.json);

app.use('/workout', workout);
app.use('/user', user);



app.listen(3000, function() {
    console.log('App is listening on port 3000');
})
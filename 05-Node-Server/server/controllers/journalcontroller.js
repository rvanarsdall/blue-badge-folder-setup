let express = require('express');
let router = express.Router();

router.get('/practice', function(req, res) {
    res.send('Hey! This is practice!')
})

router.get('/about', function(req, res) {
    res.send('Welcome')
})
module.exports = router
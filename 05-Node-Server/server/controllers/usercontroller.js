const router = require('express').Router();
const User = require('../db').import('../models/user')
const jwt = require("jsonwebtoken")



router.post('/create', function (req, res) {

    User.create({
        email: req.body.user.email,
        password: req.body.user.password
    })
    .then(
        function createSuccess(user) {
            let token = jwt.sign({id: user.id}, "i_am_secret", {expiresIn: 60 * 60 *125})
            res.json({
                user: user,
                message: 'User successfully created!',
                sessionToken: token
            });
        }
        
    )
    .catch(err => res.status(500).json({error:err}))

});


router.post('/login', function(req,res) {

    User.findOne({
        where: {
            email: req.body.user.email
        }
    })
    .then(function loginSuccess(user) {
        if (user) {
        res.status(200).json({
            user: user
        })
    } else {
        res.status(500).json({error: "User doesn't exist."})
    }
})
    .catch(err => res.status(500).json({error: err}))
})


module.exports = router;
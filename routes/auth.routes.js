var express = require("express");
var router = express.Router();
var helpers = require("./helpers/auth.helpers");
var models = require("../models");
var crypto = require("crypto");
var jwt = require('jsonwebtoken');

router.post("/register", function (req, res) {
    if (!req.body.name || !req.body.password || !req.body.email) {
        return res.status(400).json({ msg: new Error("Please put all data on body") });
    }
    var user = {
        name: req.body.name,
        email: req.body.email,
        salt: helpers.getSalt()
    };

    user.hash = helpers.getHash(user.salt, req.body.password);
    models.User.create(user)
        .then(function (resp) {
            res.status(201).json({ msg: "User Created" })
        })
        .catch(function (err) {
            res.status(400).json({ msg: err.toString() });
        })
})

router.post("login", function (req, res) {

    console.log("/auth/login");

    if (!req.body.password || !req.body.email) {
        return res.status(400).json({ msg: new Error("Please put all data on body") });

    }
    console.log(req.body.password, req.body.email)

    models.User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(function (resp) {
            if (helpers.checkIfValidPass(resp, req.body.password)) {
                var expiry = new Date();
                expiry.setDate(expiry.getDate() + 7);
                res.json({
                    token: jwt.sign({
                        exp: parseInt(expiry.getTime() / 1000),
                        userID: resp.id,
                        name: resp.name,
                        email: resp.email
                    }, process.env.JWT_SECRET)
                });
            }
            else {
                throw new Error("Password is not a match");
            }
        })
        .catch(function (err) {
            res.status(400).json({ msg: err.toString() });
        })
})

module.exports = router;
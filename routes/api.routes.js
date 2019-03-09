//Displaying and saving data into the db

// Dependencies

var express = require("express");
var router = express.Router();

// Requiring our models

var db = require("../models");

// Routes
// =============================================================

router.get("/check", function (req, res) {
    res.send("it works");
})

module.exports = function (app) {

    // GET route for getting all of the posts
    app.get("/api/posts/", function (req, res) {
        db.Farm.findAll({})
            .then(function (dbPost) {
                res.json(dbPost);
                console.log(res);
            });
    });
    // Get route for retrieving a single post
    // app.get("/api/posts", function (req, res) {
    //     console.log("res");

    //     db.Farm.findAll({
    //         where: {
    //             zipcode: req.params.zipcode
    //         }
    //     }).then(function (dbPost) {
    //         console.log(dbPost);
    //         res.json(dbPost);
    //     });
    // });

    // POST route for saving a new post
    app.post("/api/posts", function (req, res) {
        db.Farm.create(req.body).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    // DELETE route for deleting posts
    app.delete("/api/posts/:id", function (req, res) {
        db.Farm.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });
};

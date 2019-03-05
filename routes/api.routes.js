//Displaying and saving data into the db

// Dependencies

var express = require("express");
var router = express.Router();

// Requiring our models

var models = require("../models");

// Routes
// =============================================================

router.get("/check", function (req, res) {
    res.send("it works");
})

module.exports = function (app) {

    // GET route for getting all of the posts
    app.get("/api/posts", function (req, res) {
        var query = {};
        if (req.query.author_id) {
            query.AuthorId = req.query.author_id;
        }
        models.Products.findAll({
            where: query
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    // Get route for retrieving a single post
    app.get("/api/posts/:id", function (req, res) {
        models.Products.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbPost) {
            console.log(dbPost);
            res.json(dbPost);
        });
    });

    // POST route for saving a new post
    app.post("/api/posts", function (req, res) {
        models.Products.create(req.body).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    // DELETE route for deleting posts
    app.delete("/api/posts/:id", function (req, res) {
        models.Products.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });
};

//Dependencies
//========================
var express = require("express");
var router = express.Router();
var Farms = require("../models/farms");

//Main
//========================
router.get("/", function (req, res) {

  Farms.findAll({}).then(function (results) {

    res.json(results);
  });

  router.get("/consumer", function (req, res) {

    Farms.findAll({
      where: {
        zipcode: req.params.zipcode
      }}).then(function (results) {
  
      res.json(results);
    });

  //create a burger, push to mysql, redirect to / to show new burger
  router.post("/api/create", function (req, res) {

    Farms.create(
      {
        burger_name: req.body.burgerText,
        devoured: 0

      }).then(function () {
        res.redirect("/");
      })

  });

  //update the db to devoured true
  router.post("/api/update/:id", function (req, res) {
    Burger.update({
      devoured: 1
    }, {
        where: {
          id: req.params.id
        }
      }).then(function (results) {
        res.end();
      })
    
  });


})
//export the routes / router
module.exports = router;
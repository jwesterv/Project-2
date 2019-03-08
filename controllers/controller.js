//Dependencies
//========================
var express = require("express");
var router = express.Router();
var Farm = require("../models/farms");

//Main
//========================
router.get("/api/farms", function (req, res) {

    Farm.findAll({})
        .then(function (results) {
            console.log(results);
            res.json(results);
        });

    //create a farm, push to mysql, redirect to / consumer
    // router.post("/api/create", function (req, res) {

    //     Farm.create(
    //         {
    //             farm_name: req.body.farmNameText,
    //             img_src = req.body.imageText,
    //             zipcode = req.body.zipcodeText,
    //             description = req.body.descriptionText

    //         }).then(function () {
    //             res.redirect("/consumer");
    //         })

    // });

    // router.post("/api/create", function (req, res) {

    //     FormData.create(
    //         {
    //             first_name: ,
    //             last_name: ,
    //             website: ,
    //             description: ,
    //             phone: ,
    //             email: ,
    //             farm_name: ,
    //             farm_address: ,
    //             city: ,
    //             state: ,
    //             zipcode: ,
    //             deliver: ,
    //             option: 

    //         }).then(function () {
    //             res.redirect("/consumer");
    //         })

    // });

    //update the db to devoured true
    router.post("/api/update/:id", function (req, res) {
        Farm.update({
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
//Dependencies
//========================
var express = require("express");
var router = express.Router();
var farm = require("../models/farm.model.js");
var db = require("../models");

//Main
//========================
router.get("/api/farms/:zipcode", function (req, res) {
    console.log(req.params)
   

        db.farm.findAll({
            where: {
                zipcode: req.params.zipcode
            }
        }).then(function (result) {
            return res.json(result);
        });
    } 
);

router.get("/api/farms/", function (req, res) {
    // console.log(res);
    db.farm.findAll({})
        .then(function (dbGet) {
            console.log(dbGet);
            res.json(dbGet);
        });

})

router.post("/api/posts/:zipcode", function (req, res) {
    console.log(req.params.zipcode);


    db.farm.findOne({
        where: {
            zipcode: req.params.zipcode
        }
    }).then(function (dbPost) {
        console.log(dbPost);
        res.json(dbPost);
    });
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


// router.post("/api/update/:id", function (req, res) {
//     farm.update({
//         where: {
//             id: req.params.id
//         }
//     }).then(function (results) {
//         res.end();
//     })

// });






//export the routes / router
module.exports = router;
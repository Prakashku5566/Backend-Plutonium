const express = require("express");
const abc = require("../introduction/intro");
const pks = require("../logger/logger");
const singh = require("../util/helper");
const data = require("../validator/formatter");
const router = express.Router();

router.get("/test-me", function (req, res) {
  // console.log('My batch is', abc.name)
   console.log(pks.welcome);
  console.log(singh.date);
    console.log(singh.month);
    console.log(singh.Batchinfo);
     console.log(data.Name);
    console.log(data.trimName);
     console.log(data.Lower);
     console.log(data.Upper);
  // abc.printName()
  res.send("My second ever api! by Prakash kumar singh");
});

router.get("/test-you", function (req, res) {
  res.send("This is the second routes implementation");
});

router.get("/give-me-students-data", function (req, res) {});
module.exports = router;
// adding this comment for no reason

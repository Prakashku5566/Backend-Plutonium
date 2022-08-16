const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookController= require("../controllers/bookContoller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook",bookController.createBook)

router.get("/getbooks",bookController.getbook)

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.put("/getbooks/:id",bookController.getbook)

module.exports = router;
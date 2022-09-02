const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const MemeController = require("../controllers/memeController")
const WeatherController = require("../controllers/weatherController")



router.post("/memecreate",MemeController.memecreate)
router.get("/gettemprature",WeatherController.gettemprature)
router.get("/getdistrict",CowinController.getdistrict)
router.get("/getmemes",MemeController.getmemes)



module.exports = router;
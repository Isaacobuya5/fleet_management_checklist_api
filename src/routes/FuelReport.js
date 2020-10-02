const express = require("express");

const { fuelReport } = require("../controllers/FuelReport");

const router = express.Router();


router.post('/register-fuel', fuelReport);


module.exports = router;
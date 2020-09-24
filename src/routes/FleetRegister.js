const express = require("express");

const { registerVehicle, getVehicleDetails } = require("../controllers/FleetRegisterController");

const router = express.Router();

router.get('/all-vehicles', getVehicleDetails);

router.post('/register-vehicle', registerVehicle);

module.exports = router;
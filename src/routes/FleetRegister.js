const express = require("express");

const { registerVehicle, getVehicleDetailsByReg } = require("../controllers/FleetRegisterController");

const router = express.Router();


router.post('/register-vehicle', registerVehicle);

router.get('/get-vehicle/:vehicleRegistration', getVehicleDetailsByReg);

module.exports = router;
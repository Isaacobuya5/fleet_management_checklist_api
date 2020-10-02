const express = require("express");

const { endTripRegisterController, changeTripStatusToEnded } = require("../controllers/EndTripRegisterController");

const router = express.Router();

router.post('/end-trip', endTripRegisterController);
router.put('/change-trip-ended/:vehicle_registration', changeTripStatusToEnded);


module.exports = router;
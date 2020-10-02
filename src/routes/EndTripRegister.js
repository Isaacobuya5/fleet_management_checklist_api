const express = require("express");

const { endTripRegisterController, changeTripStatusToEnded } = require("../controllers/EndTripRegisterController");

const router = express.Router();

router.post('/end-trip', endTripRegisterController);
router.put('/change-trip-ended', changeTripStatusToEnded);


module.exports = router;
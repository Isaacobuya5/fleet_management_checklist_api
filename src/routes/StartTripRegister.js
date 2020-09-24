const express = require("express");
const router = express.Router();
const { startTripDetails } = require("../controllers/StartedTripController");

router.post('/vehicle-details', startTripDetails);
module.exports = router;
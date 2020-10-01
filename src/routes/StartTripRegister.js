const express = require("express");
const router = express.Router();
const { startTripDetails, runningTrips, removeAllRunningTrips } = require("../controllers/StartedTripController");

router.post('/vehicle-details', startTripDetails);
// get all currently running trips
router.get("/current-trips", runningTrips);

router.delete("/remove-trips", removeAllRunningTrips);
module.exports = router;
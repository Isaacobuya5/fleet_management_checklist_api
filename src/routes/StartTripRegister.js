const express = require("express");
const router = express.Router();
const { startTripDetails, runningTrips, removeAllRunningTrips, changeTripStatus } = require("../controllers/StartedTripController");

router.put('/change-trip-status/:vehicle_registration', changeTripStatus);
router.post('/vehicle-details', startTripDetails);
// get all currently running trips
router.get("/current-trips", runningTrips);

router.delete("/remove-trips", removeAllRunningTrips);
module.exports = router;
const express = require("express");

const { endTripRegisterController } = require("../controllers/EndTripRegisterController");

const router = express.Router();

router.post('/end-trip', endTripRegisterController);

module.exports = router;
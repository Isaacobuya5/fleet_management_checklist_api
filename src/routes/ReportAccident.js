const express = require("express");

const { reportAccident } = require("../controllers/AccidentReport");

const router = express.Router();

router.post('/report-accident', reportAccident);

module.exports = router;
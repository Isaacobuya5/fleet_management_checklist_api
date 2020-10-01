const express = require("express");

const { reportIncident } = require("../controllers/IncidentReports");

const router = express.Router();

router.post('/report-incident', reportIncident);

module.exports = router;
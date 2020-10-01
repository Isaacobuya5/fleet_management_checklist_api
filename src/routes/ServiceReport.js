const express = require("express");

const { serviceReport } = require("../controllers/ServiceReports");

const router = express.Router();

router.post('/car-service', serviceReport);

module.exports = router;
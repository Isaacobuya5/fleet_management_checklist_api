require('dotenv').config();
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");

require("./src/db/db");

const FleetRegister = require("./src/routes/FleetRegister");
const StartTripRegister = require("./src/routes/StartTripRegister");
const EndTripRegister = require("./src/routes/EndTripRegister");
const ReportAccident = require("./src/routes/ReportAccident");
const ReportIncidence = require("./src/routes/IncidentReport");
const ServiceReport = require("./src/routes/ServiceReport");
const FuelReport = require("./src/routes/FuelReport");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/api', FleetRegister, StartTripRegister, EndTripRegister, ReportAccident, ReportIncidence, ServiceReport, FuelReport);




app.listen(port, () => console.log(`Server running on port ${port}`));
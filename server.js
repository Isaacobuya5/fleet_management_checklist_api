require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");

require("./src/db/db");

const FleetRegister = require("./src/routes/FleetRegister");
const StartTripRegister = require("./src/routes/StartTripRegister");
const EndTripRegister = require("./src/routes/EndTripRegister");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/api', FleetRegister, StartTripRegister, EndTripRegister);



app.listen(port, () => console.log(`Server running on port ${port}`));
const mongoose = require("mongoose");

const fuelingReportSchema = new mongoose.Schema({
    vehicle_registration: {
        type: String,
        required: true
    },
    fuel_station: {
        type: String,
        required: true
    },
    litres: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        default: new Date().toLocaleDateString()
    },
    time: {
        type: String,
        default: new Date().toLocaleTimeString()
    },
    lat: {
        type: String,
        required: true
    },
    long: {
        type: String,
        required: true
    }
});

const FuelingReport = mongoose.model('FuelingReport', fuelingReportSchema);
module.exports = FuelingReport;
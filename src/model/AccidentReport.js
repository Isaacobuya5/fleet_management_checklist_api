const mongoose = require('mongoose');

const accidentReportSchema = new mongoose.Schema({
    vehicle_registration: {
        type: String,
        required: true
    },
    extent_damage: {
        type: String,
        required: true
    },
    comments: {
        type: String,
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

const AccidentReport = mongoose.model('AccidentReport', accidentReportSchema);
module.exports = AccidentReport;
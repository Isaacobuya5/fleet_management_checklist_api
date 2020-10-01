const mongoose = require('mongoose');

const incidentReportSchema = new mongoose.Schema({
    vehicle_registration: {
        type: String,
        required: true
    },
    type: {
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

const IncidentReport = mongoose.model('IncidentReport', incidentReportSchema);
module.exports = IncidentReport;
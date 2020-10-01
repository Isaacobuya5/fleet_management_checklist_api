const mongoose = require('mongoose');

const servicingReportSchema = new mongoose.Schema({
    vehicle_registration: {
        type: String,
        required: true
    },
    current_odometer_reading: {
        type: String,
        required: true
    },
    service_due_date: {
        type: String,
        required: true
    },
    garage: {
        type: String,
        required: true
    },
    parts_needed: {
        type: Array,
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

const ServicingReport = mongoose.model('ServiceReport', serviceReportSchema);
module.exports = ServicingReport;
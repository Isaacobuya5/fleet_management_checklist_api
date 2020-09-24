const mongoose = require("mongoose");

const startTripSchema = new mongoose.Schema({
    vehicle_registration: {
        type: String,
        required: true
    },
    current_odometer_reading: {
        type: String,
        required: true
    },
    starting_point: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    lat: {
        type: String,
        required: true
    },
    long: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    }
}
);

const StartTripRegister = mongoose.model('StartTripRegister', startTripSchema);
module.exports = StartTripRegister;
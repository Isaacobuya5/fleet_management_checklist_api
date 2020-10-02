const mongoose = require("mongoose");


const endTripRegisterSchema = new mongoose.Schema({
    vehicle_registration: {
        type: String,
        required: true
    },
    current_odometer_reading: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: new Date().toLocaleDateString()
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
        type: String,
        default: new Date().toLocaleTimeString()
    }
});

const EndTripRegister = mongoose.model('EndTripRegister', endTripRegisterSchema);
module.exports = EndTripRegister;
const mongoose = require("mongoose");


const endTripRegisterSchema = new mongoose.Schema({
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
    },
    trip_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'StartTripRegister'
    }
});

const EndTripRegister = mongoose.model('EndTripRegister', endTripRegisterSchema);
module.exports = EndTripRegister;
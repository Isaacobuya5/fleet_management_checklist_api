const mongoose = require("mongoose");

// headlights condition schema
const headlightsConditionSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

// sidelights schema
const sidelightsConditionSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

// indicator schema
const indicatorAndBreakLightsSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});


// number plate and reverse lights schema
const numberPlateAndReverseLightsConditionSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

const electricalCheckSchema = new mongoose.Schema({
    headlights: headlightsConditionSchema,
    sidelights: sidelightsConditionSchema,
    indicator_and_brake_lights: indicatorAndBreakLightsSchema,
    number_plate_and_reverse_brakes: numberPlateAndReverseLightsConditionSchema
});

module.exports = {
    electricalCheckSchema,
}
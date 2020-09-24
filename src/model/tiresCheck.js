const mongoose = require("mongoose");

// pressure schema
const pressureSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

// tread - 1/3 a coin
const treadSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

// spare wheel
const spareWheelSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

// jack & spanner
const jackAndSpannerSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

const tireCheckSchema = new mongoose.Schema({
    pressure: pressureSchema,
    tread: treadSchema,
    spare_wheel: spareWheelSchema,
    jack_and_spanner: jackAndSpannerSchema
});

module.exports = {
    tireCheckSchema
}
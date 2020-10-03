const mongoose = require("mongoose");

// oil level schema
const oilLevelSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

// radiator fluid and cap schema
const radiatorFluidAndCapSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

// clutch and break fluid
const clutchAndBrakeFluidSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

// fan belt tightness
const fanBeltTightnessSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

// exhaust pipe condition
const exhaustPipeConditionSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

// fuel tank cap and leaks
const fuelTankCapAndLeaksSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

const engineCheckSchema = new mongoose.Schema({
    oil_levels: oilLevelSchema,
    radiator_fluid: radiatorFluidAndCapSchema,
    clutch_break_fluid: clutchAndBrakeFluidSchema,
    fan_belt_tightness: fanBeltTightnessSchema,
    exhaust_pipe: exhaustPipeConditionSchema,
    fuel_tank_cap_and_leaks: fuelTankCapAndLeaksSchema,
  });

module.exports = {
    engineCheckSchema
}
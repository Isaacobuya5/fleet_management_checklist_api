const mongoose = require("mongoose");

const { engineCheckSchema } = require("./engineCheck");
const { electricalCheckSchema } = require('./electricalCheck');
const { mirrorsSchema } = require("./mirrorsCheck");
const { tireCheckSchema } = require("./tiresCheck");
const { generalCheckSchema } = require("./generalCheckSchema");


const fleetManagementSchema = new mongoose.Schema({
  vehicle_registration: {
    type: String,
    trim: true,
    required: true,
  },
  trip_date: {
    type: Date,
    required: true,
  },
  engine_check: engineCheckSchema,
  electrical_check: electricalCheckSchema,
  mirror_check: mirrorsSchema,
  tire_check: tireCheckSchema,
  general_check: generalCheckSchema
});

const FleetRegister = mongoose.model("FleetRegister", fleetManagementSchema);
module.exports = FleetRegister;

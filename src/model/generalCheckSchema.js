const mongoose = require("mongoose");

// first aid kit 
const firstAidKitSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

// triangles
const trianglesSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

// extinguisher
const extinguisherSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

// radio
const radioSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

const generalCheckSchema = new mongoose.Schema({
    first_aid_kit: firstAidKitSchema,
    triangles: trianglesSchema,
    extinguisher: extinguisherSchema,
    radio: radioSchema
});

module.exports = {
    generalCheckSchema
}
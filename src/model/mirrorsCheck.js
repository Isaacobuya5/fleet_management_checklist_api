const mongoose = require("mongoose");

// windscreen schema
const windscreenSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

// side mirrors
const sideMirrorsSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

// rearview schema
const rearViewMirrorsSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

const mirrorsSchema = new mongoose.Schema({
    windscreen: windscreenSchema,
    side_mirrors: sideMirrorsSchema,
    rear_view_mirrors: rearViewMirrorsSchema
});

module.exports = {
    mirrorsSchema
}
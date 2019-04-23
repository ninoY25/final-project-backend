import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Mongoose schema for contact object.
 */
let GameSchema = new Schema({
    img: {
        type: String,
        required: "required"
    },
    platform: {
        type: String,
        required: "required"
    },
    name: {
        type: String,
        required: "required"
    }
}, {
    versionKey: false
});

export var model = mongoose.model('game', GameSchema);

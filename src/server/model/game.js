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
    },
    detail : {
        type: String,
        required: "required"
    },
    img1 : {
        type: String,
        required: "required"
    },
    img2 : {
        type: String,
        required: "required"
    },
    img3 : {
        type: String,
        required: "required"
    },
    price : {
        type: String,
        required: "required"
    }
}, {
    versionKey: false
});

export var model = mongoose.model('game', GameSchema);

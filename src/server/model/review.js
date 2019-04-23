import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Mongoose schema for contact object.
 */
let ReviewSchema = new Schema({
    title: {
        type: String,
        required: "required"
    },
    content: {
        type: String,
        required: "required"
    },
    rate: {
        type: String,
        required: "required"
    },
    gameid: {
        type: String,
        required: "required"
    },
    userid: {
        type: String,
        required: "required"
    }
}, {
    versionKey: false
});

export var model = mongoose.model('review', ReviewSchema);

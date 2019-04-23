import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Mongoose schema for contact object.
 */
let GameDetailSchema = new Schema({
    background: {
        type: String,
        required: "required"
    },
    gameid: {
        type: String,
        required: "required"
    },
    recommend: {
        type: String,
        required: "required"
    }
}, {
    versionKey: false
});

export var model = mongoose.model('gamedetail', GameDetailSchema);

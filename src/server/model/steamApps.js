import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Mongoose schema for contact object.
 */
let SteamAppsSchema = new Schema({
    appid: {
        type: String,
        required: "required"
    },
    name: {
        type: String,
        required: "required"
    },
    developer: {
        type: String,
        required: "required"
    },
    publisher: {
        type: String,
        required: "required"
    },
    score_bank: {
        type: String,
        required: "required"
    },
    positive: {
        type: String,
        required: "required"
    },
    negative: {
        type: String,
        required: "required"
    },
    userscore: {
        type: String,
        required: "required"
    },
    owners: {
        type: String,
        required: "required"
    },
    average_forever: {
        type: String,
        required: "required"
    },
    average_2weeks: {
        type: String,
        required: "required"
    },
    median_forever: {
        type: String,
        required: "required"
    },
    median_2weeks: {
        type: String,
        required: "required"
    },
    price: {
        type: String,
        required: "required"
    },
    initialprice: {
        type: String,
        required: "required"
    },
    discount: {
        type: String,
        required: "required"
    }
}, {
    versionKey: false
});

export var model = mongoose.model('steamApps', SteamAppsSchema);
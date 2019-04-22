import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Mongoose schema for contact object.
 */
let UserSchema = new Schema({
    username: {
        type: String,
        required: "username is required"
    },
    password: {
        type: String,
        required: "password is required"
    },
    firstName: {
        type: String,
        required: "firstName is required"
    },
    lastName: {
        type: String,
        required: "lastName is required"
    }
}, {
    versionKey: false
});

export var model = mongoose.model('user', UserSchema);
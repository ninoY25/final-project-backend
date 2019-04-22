import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Mongoose schema for contact object.
 */
let ContactSchema = new Schema({
    firstName: {
        type: String,
        required: "firstName is required"
    },
    lastName: {
        type: String,
        required: "lastName is required"
    },
    email:{
        type: String
    },
    phoneNumber:{
        type: String,
        required: "phoneNumber is required"
    },
    created_date: {
        type: Date,
        default: Date.now
    }

}, {
    versionKey: false
});

export var model = mongoose.model('contacts', ContactSchema);
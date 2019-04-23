import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Mongoose schema for contact object.
 */
let CarouselSchema = new Schema({
    titleimg: {
        type: String,
        required: "required"
    },
    game: {
        type: String,
        required: "required"
    },
    contentimg1: {
        type: String,
        required: "required"
    },
    contentimg2: {
        type: String,
        required: "required"
    },
    contentimg3: {
        type: String,
        required: "required"
    },
    contentimg4: {
        type: String,
        required: "required"
    }
}, {
    versionKey: false
});

export var model = mongoose.model('carousel', CarouselSchema);

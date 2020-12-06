const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tutorScheme = new Schema({
    firstName: String,
    lastName: String,
    bio: String,
    email: String,
    phone: Number,
    subjects: String,
    canDrive: Boolean,
    availability: String,
    likes: Number,
    dislikes: Number,
}, {
    timestamps: true,
});

const Tutor = mongoose.model('Tutor', tutorScheme);

module.exports = Tutor;
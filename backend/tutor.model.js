const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tutorScheme = new Schema({
    name: String,
    email: String,
    phone: Number,
    subjects: String,
    canDrive: Boolean,
    availability: String,
}, {
    timestamps: true,
});

const Tutor = mongoose.model('Tutor', tutorScheme);

module.exports = Tutor;
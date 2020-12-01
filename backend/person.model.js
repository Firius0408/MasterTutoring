const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personScheme = new Schema({
    name: String,
    email: String,
    phone: Number,
    address: String,
    field: String,
    subjects: String,
    canDrive: Boolean,
    availability: String,
    venmo: String,
}, {
    timestamps: true,
});

const Person = mongoose.model('Person', personScheme);

module.exports = Person;
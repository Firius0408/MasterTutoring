const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userScheme = new Schema({
    _id: String,
    userName: String,
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    email: String,
    password: String,
}, {
    timestamps: true,
});

const User = mongoose.model('User', userScheme);

module.exports = User;
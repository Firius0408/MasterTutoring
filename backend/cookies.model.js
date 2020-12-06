const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cookieScheme = new Schema({
    userName: String,
    cookieValue: String,
}, {
    timestamps: true,
})

const Cookie = mongoose.model('Cookie', cookieScheme);

module.exports = Cookie;
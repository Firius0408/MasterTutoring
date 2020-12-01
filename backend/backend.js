const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 4000;

app.use(express.json());

const uri = 'mongodb://127.0.0.1:27017/people'

mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const personRouter = require('./person.routes');

app.use('/person', personRouter);

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`);
});
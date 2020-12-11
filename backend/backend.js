const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const PORT = 4000;

require('dotenv').config();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

const uri = process.env.MONGO_DATABASE_URL;

mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const tutorRouter = require('./tutor.routes');
const userRouter = require('./user.routes');

app.use('/tutor', tutorRouter);
app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`);
});
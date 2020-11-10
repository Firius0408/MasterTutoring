const express = require('express');
const app = express();
const PORT = 8080;

require('./src/database');

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});
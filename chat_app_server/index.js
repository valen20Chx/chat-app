const users = require('./users/index.js');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 5000;

app.listen(PORT, () => {
    console.log('Listening on', PORT);
    console.log('Local: ', `http://localhost:${PORT}`);
    // console.log('Foreign: ', `http://${server.address().address}::${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Homepage');
});

app.use('/users', users);
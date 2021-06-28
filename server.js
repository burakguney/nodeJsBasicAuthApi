require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const basicAuth = require('helpers/basicAuth');
const errorHandler = require('helpers/errorHandler');

const fs = require('fs'),
    http = require('http'),
    https = require('https');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use(basicAuth);


app.use('/', require('./api/apiController'));


app.use(errorHandler);


const port = 8000;

const options = {
    key: fs.readFileSync('./SSL/key.pem'),
    cert: fs.readFileSync('./SSL/cert.pem'),
};

const server = https.createServer(options, app).listen(port, function () {
    console.log("Express server listening on port " + port);
});
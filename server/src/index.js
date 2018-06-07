const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
const app = express();
const path = require('path');
const Routes = require('./routes');
const MongoDB = require('./lib/MongoDB');
require('./lib/passport');
const mongoose = require('mongoose');

const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(CLIENT_BUILD_PATH));

app.use('/api', Routes());

app.get('/', function(request, response) {
	response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
	console.info(`listening in port ${process.env.PORT}`);
})


MongoDB.start();

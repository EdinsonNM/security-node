const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
const app = express();

const Routes = require('./routes');
const MongoDB = require('./lib/MongoDB');

app.use(bodyParser.json());
app.use(cors());
Routes(app);

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
	console.info(`listening in port ${process.env.PORT}`);
})


MongoDB.start();

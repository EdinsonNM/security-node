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

app.listen(process.env.PORT, () => {
	console.info(`listening in port ${process.env.PORT}`);
})


MongoDB.start();

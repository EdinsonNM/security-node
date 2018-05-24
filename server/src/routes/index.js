const Application = require( './application');
const Connection = require( './connection');
const Token = require( './token');

module.exports =  function (app) {
	app.use('/api/applications', Application);
	app.use('/api/connections', Connection);
	app.use('/api/token', Token);
}
const Application = require( './application');
const Connection = require( './connection');
const User = require( './user');
const Token = require( './token');
const Router = require ("express").Router;

module.exports =  function () {
	const router = new Router();
	router.use('/applications', Application);
	router.use('/connections', Connection);
	router.use('/token', Token);
	router.use('/user', User);
	return router
}
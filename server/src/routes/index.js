const Application = require( './application');
const Connection = require( './connection');
const User = require( './user');
const Token = require( './token');
const Router = require ("express").Router;
const passport    = require('passport');

module.exports =  function () {
	const router = new Router();
	router.use('/applications', Application);
	router.use('/connections', passport.authenticate('jwt', {session: false}), Connection);
	router.use('/token', passport.authenticate('jwt', {session: false}), Token);
	router.use('/user', User);
	return router
}
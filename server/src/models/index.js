const MongoDB = require('../lib/MongoDB');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.Application = MongoDB.createModel('Application','applications', {
	name: String,
	createdAt: Date,
	updatedAt: Date
})

module.exports.Connection = MongoDB.createModel('Connection','connections', {
	_app:  {type: Schema.Types.ObjectId, ref: 'Application'},
	server: String,
	user: String,
	password: String,
	database: String,
	active: {type: Boolean, default: true},
	createdAt: Date,
	updatedAt: Date
})
module.exports.Token = MongoDB.createModel('Token','tokens', {
	_app:  {type: Schema.Types.ObjectId, ref: 'Application'},
	token: 'string',
	active: {type: Boolean, default: true},
	createdAt: Date,
	updatedAt: Date

})
module.exports.UserLog = MongoDB.createModel('UserLog','userlogs', {
	_app: {type: Schema.Types.ObjectId, ref: 'Application'},
	_token:{type: Schema.Types.ObjectId, ref: 'Token'},
	user: 'string',
	createdAt: Date,
	updatedAt: Date

});

module.exports.User = MongoDB.createModelUser('User','users', {
	username: String,
	password: String,
	createdAt: Date,
	updatedAt: Date
});
const MongoDB = require('../lib/MongoDB');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Application = MongoDB.createModel('Application','applications', {
	name: String,
	createdAt: Date,
	updatedAt: Date
})

const Connection = MongoDB.createModel('Connection','connections', {
	_app:  {type: Schema.Types.ObjectId, ref: 'Application'},
	server: String,
	user: String,
	password: String,
	database: String,
	active: {type: Boolean, default: true},
	token: 'string',
	createdAt: Date,
	updatedAt: Date
})
const Token = MongoDB.createModel('Token','tokens', {
	_app:  {type: Schema.Types.ObjectId, ref: 'Application'},
	token: 'string',
	active: {type: Boolean, default: true},
	createdAt: Date,
	updatedAt: Date

})
const UserLog = MongoDB.createModel('UserLog','userlogs', {
	_app: {type: Schema.Types.ObjectId, ref: 'Application'},
	_token:{type: Schema.Types.ObjectId, ref: 'Token'},
	user: 'string',
	createdAt: Date,
	updatedAt: Date

});

const User = MongoDB.createModelUser('User','users', {
	username: String,
	password:  {
		type: String,
		required: true,
	},
	createdAt: Date,
	updatedAt: Date
});

module.exports = {
	Application,
	Connection,
	Token,
	UserLog,
	User
}
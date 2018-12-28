const { User } = require('../models');
var passport = require('passport');
const jwt = require('jsonwebtoken');

class UserController {
	static auth(req, res){
		passport.authenticate('local', {session: false}, function(err, user, info) {
			if (err || !user) {
				return res.status(400).json({
					message: info ? info.message : 'Login failed',
					user   : user
				});
			}
	
			req.login(user, {session: false}, (err) => {
				if (err) {
					res.send(err);
				}
				console.log(user, process.env.SECURITY_TOKEN)
				const token = jwt.sign({_id: user._id,user: user.username}, process.env.SECURITY_TOKEN);
	
				return res.json({user: {_id: user._id,username: user.username}, token: { type: 'bearer', value: token}});
			});
		})(req, res);
	}

	static setup(req, res){
		var admin = new User({ 
			username: 'root', 
			password: '{node-app-2018}'
		});
		
		admin.save(function(err) {
			if (err) throw err;
			console.log('User saved successfully');
			res.json({ success: true });
		});
	}

	static post(req, res){
		var admin = new User(req.body);	
		admin.save(function(err) {
			if (err) throw err;
			console.log('User saved successfully');
			res.json({ success: true });
		});
	}

	static logout(req, res){
		req.logout();
		res.json({success: true});
	}

	static me(req, res){
		res.send(req.user);
	}
}
module.exports = UserController;
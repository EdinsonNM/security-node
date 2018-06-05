const { User } = require('../models');
var passport = require('passport');

class UserController {
	static auth(req, res){
		passport.authenticate('local', {session: false}, function(err, user, info) {
			if (err) { return next(err); }
			if (!user) {
				return res.json(401, { success:false, message: 'Usuario o Contraseña incorrectos' });
			}
			//user has authenticated correctly thus we create a JWT token
			var obj={
				_id:user._id,
				username:user.username
			};
			var token = jwt.sign(obj, process.env.SECRET_KEY);
			res.status(200).json({ obj, token });
		})(req, res, next);
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

	static logout(req, res){

	}

	static me(req, res){
		
	}
}
module.exports = UserController;
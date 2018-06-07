const { UserLog, Token } = require('../models');
class UserlogController{
	static getAll(req, res){
		UserLog.find({_app: req.params.app})
		.then((response)=> {
			res.json(response);
		});
	}
	static async post(req, res){
		const token = await Token.findOne({_app: req.params.app, token: req.params.token});
		if(token){
			const user = new UserLog({
				_app: req.params.app,
				user: req.params.user
			});
			user.save((error, data) => {
				if(error){
					return res.status(500).json(error);
				}
				res.status(200).json(data);
			});
		}else {
			res.send(401);
		}
	}
}
module.exports = UserlogController;
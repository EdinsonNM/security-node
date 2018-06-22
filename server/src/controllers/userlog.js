const { UserLog, Connection } = require('../models');
class UserlogController{
	static getAll(req, res){
		UserLog.find({_cnn: req.params.cnn})
		.then((response)=> {
			res.status(200).json(response);
		});
	}
	static async post(req, res){
		const cnn = await Connection.findOne({token: req.params.token});
		if(cnn){
			const user = new UserLog({
				_cnn: cnn._id,
				user: req.body.user.app,
				ip: req.body.ip
			});
			user.save((error, data) => {
				if(error){
					return res.status(500).json(error);
				}
				res.status(200).json(data);
			});
		}else {
			res.status(401).json({});
		}
	}
}
module.exports = UserlogController;
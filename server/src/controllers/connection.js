const { Connection } = require('../models');
class ConnectionController{
	static get(req, res){
		Connection.findById(req.params.id)
		.then((response)=> {
			res.json(response);
		})
	}
	static getAll(req, res){
		Connection.find({_app: req.params.app})
		.then((response)=> {
			res.json(response);
		});
	}
	static post(req, res){
		console.dir(req.body);
		const app = new Connection(req.body);
		app.save((error, data) => {
			if(error){
				return res.status(500).json(error);
			}
			res.status(200).json(data);
		});
	}
	static delete(req, res){

	}
}
module.exports = ConnectionController;
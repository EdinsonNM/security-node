const { Connection } = require('../models');
const uuidv1 = require("uuid/v1");

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
		const app = new Connection({...req.body, token: uuidv1()});
		app.save((error, data) => {
			if(error){
				return res.status(500).json(error);
			}
			res.status(200).json(data);
		});
	}
	static put(req, res){
		Connection.update({ _id: req.params.id }, { $set: req.body}, (error, data) => {
			if(error){
				return res.status(500).json(error);
			}
			res.status(200).json(data);
		});
	}
	static delete(req, res){
		Connection.deleteOne({ _id: req.params.id }, function (err) {
			if (err) return res.status(500).json(error);
			res.status(200).json({});
		});
	}
}
module.exports = ConnectionController;
const { Application, Token, Connection } = require('../models');
const jwt = require("jsonwebtoken");
const Utils = require('../lib/utils');
class ApplicationController{
	static get(req, res){
		Application.findById(req.params.id)
		.then((response)=> {
			res.json(response);
		})
	}
	static getAll(req, res){
		Application.find({})
		.then((response)=> {
			res.json(response);
		});
	}
	static post(req, res){
		console.dir(req.body);
		const app = new Application(req.body);
		app.save((error, data) => {
			if(error){
				return res.status(500).json(error);
			}
			res.status(200).json(data);
		});
	}
	static delete(req, res){

	}
	static getAuth(req, res){
		Token.findOne({_app: req.params.app, token: req.params.token}, (errToken, token) => {
			if(err) return res.status(404);
			Connection.findOne({_app: req.params.app, active: true}, (errCnn, cnn) => {
				if(err) return res.status(404);
				var token = btoa(JSON.stringify({cnn:Utils.getConnection(cnn)}))
				//var token = jwt.sign({ cnn: Utils.getConnection(cnn) }, process.env.SECURITY_TOKEN);
				res.send(token)
			})
		})
	}
}
module.exports = ApplicationController;
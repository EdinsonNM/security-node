const { Application, Token, Connection } = require('../models');
const jwt = require("jsonwebtoken");
const Utils = require('../lib/utils');
const mongoose = require('mongoose');

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
		var token = Token.findOne({_app: req.params.app, token: req.params.token}).exec();
		var cnn =  Connection.findOne({_app: req.params.app}).exec();
		token.then((resultToken) => {
				if(!resultToken) return res.send(401);
				cnn.then((resultCnn) => {
					if(!resultCnn) return res.send(404);
					const t = Buffer.from(JSON.stringify({cnn:Utils.getConnection(resultCnn)})).toString('base64');
					res.send(t)
		
				})
			
		})
		
		
	}
}
module.exports = ApplicationController;
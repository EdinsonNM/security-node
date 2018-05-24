const { Token } = require('../models');
const uuidv1 = require("uuid/v1");
class TokenController{
	static get(req, res){
		Token.findById(req.params.id)
		.then((response)=> {
			res.json(response);
		})
	}
	static getLastToken(req, res){
		Token.findOne({_app: req.params.app, active: true})
		.then((response)=> {
			res.json(response);
		});
	}
	static post(req, res){
		Token.where({}).update({ active: false }, () => {
			const token = new Token({token: uuidv1(), _app: req.body._app});
			token.save((error, data) => {
				if(error){
					return res.status(500).json(error);
				}
				console.log('...save...')
				res.json(data);
			});
		});
	}
	static delete(req, res){

	}
}
module.exports = TokenController;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;require('dotenv').config();
let db;

class MongoDB {
    static getDB(){
        return db;
    }

    static createModel(modelName, modelPluralName, schemaObj ){
        console.log("schema---",modelName,modelPluralName, schemaObj);
        let schema = new Schema(schemaObj);
        schema.pre('save', function(next){
            const now = new Date();
            this.updatedAt = now;
            if (!this.createdAt) {
                this.createdAt = now;
            }
            next();
        });
        return  mongoose.model(modelName, schema, modelPluralName);
	}
	static start(){
        db = mongoose.connect(`mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`, {});
        db.then(
            () =>{
                console.log('connection mongodb ...', `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`);
            },
            (err) => {
                console.log(`connection mongodb error ... mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`);
        });
	}
}

module.exports = MongoDB;
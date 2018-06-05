var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
let db;
const SALT_WORK_FACTOR = 10;

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
    static createModelUser(modelName, modelPluralName, schemaObj ){
        console.log("schema---",modelName,modelPluralName, schemaObj);
        let schema = new Schema(schemaObj);
        schema.pre('save', function(next){
            var user = this;
            var now = new Date();
            user.updatedAt = now;
            if (!user.createdAt){
                user.createdAt=now;
            }
            if(!user.isModified('password')) return next();
            bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
                if(err) return next(err);
                user.salt=salt;
                bcrypt.hash(user.password, salt, function(err, hash) {
                    if(err) return next(err);
                    user.password = hash;
                    console.log('update password:'+user.username);
                    next();
                });
            });
        });

        schema.methods.comparePassword  = function(candidatePassword, cb) {
            bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
                if(err) return cb(err);
                cb(null, isMatch);
            });
        };
        return  mongoose.model(modelName, schema, modelPluralName);
	}
	static start(){
        const connect = function connect() {
            var options = { server: { socketOptions: { keepAlive: 1 } } };
            db = mongoose.connect(`mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`);
            db.then(
                () =>{
                    console.log('connection mongodb ...', `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`);
                },
                (err) => {
                    console.log(`connection mongodb error ... mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`);
            });
        };
        connect();
        mongoose.connection.on('error', console.log);
        mongoose.connection.on('disconnected', connect);
	}
}

module.exports = MongoDB;
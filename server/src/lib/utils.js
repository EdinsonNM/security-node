class Utils{
	static getConnection(credential){
		return `Server=${credential.server};Database=${credential.database};User Id=${credential.user};Password=${credential.password};`;
	}
}
module.exports = Utils;
class Utils{
	static getConnection(credential){
		return btoa(`Server=${credential.server};Database=${credential.database};User Id=${credential.user};Password=${credential.password};`);
	}
}
class HeaderRequest{
	static getRequestHeader(){
		const requestHeader = { 'Content-Type': 'application/json', Accept: 'application/json' };
        return requestHeader;
	}
	static getPublicRequestHeader() {
        const requestHeader = { 'Content-Type': 'application/json', Accept: 'application/json' };
        return requestHeader;
    }
}

export default HeaderRequest;
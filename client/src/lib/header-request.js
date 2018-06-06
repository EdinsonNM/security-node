import AuthToken from './auth-token';
class HeaderRequest{
	static getRequestHeader() {
        const requestHeader = { 'Content-Type': 'application/json', Accept: 'application/json' };
        const token = AuthToken.getToken();
        if (token) {
            requestHeader.Authorization = AuthToken.getAuthorization();
        }
        return requestHeader;
    }
	static getPublicRequestHeader() {
        const requestHeader = { 'Content-Type': 'application/json', Accept: 'application/json' };
        return requestHeader;
    }
}

export default HeaderRequest;
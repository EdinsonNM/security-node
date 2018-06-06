const KEY_TOKEN = 'token-security-node'

const store = localStorage;

class AuthToken {
    static getToken() {
        return JSON.parse(store.getItem(KEY_TOKEN)) || null;
    }

    static setToken(token) {
        if (token) {
            store.setItem(KEY_TOKEN, JSON.stringify(token));
        } else {
            store.removeItem(KEY_TOKEN);
        }
    }

    static getAuthorization() {
        const token = AuthToken.getToken();
        return `${token.type} ${token.value}`;
    }

}

export default AuthToken;

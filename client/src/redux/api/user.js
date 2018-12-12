import HeaderRequest from '../../lib/header-request';
const SERVER_URL = process.env.REACT_APP_SERVER_URL
class UserApi{
    static isAuthenticate = false;
    constructor(action$, store, deps) {
        this.action$ = action$;
        this.store = store;
        this.deps = deps;
    }

    login = (payload) => this.deps.ajax
        .post(`${SERVER_URL}/user/login`, payload, HeaderRequest.getPublicRequestHeader())

    me = () => this.deps.ajax
        .get(`${SERVER_URL}/user/me`,  HeaderRequest.getRequestHeader())

    logout = (payload) => this.deps.ajax
        .post(`${SERVER_URL}/user/logout`,{},  HeaderRequest.getRequestHeader())
}
export default UserApi;
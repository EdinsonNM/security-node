import HeaderRequest from '../../lib/header-request';
const SERVER_URL = 'api'
class TokenApi{
	constructor(action$, store, deps) {
        this.action$ = action$;
        this.store = store;
        this.deps = deps;
    }

    getLastToken = (payload) => this.deps.ajax
    	.getJSON(`${SERVER_URL}/token/application/${payload.app}`, HeaderRequest.getRequestHeader())
    
    post = (payload) => this.deps.ajax
    	.post(`${SERVER_URL}/token`,{ _app : payload.app},  HeaderRequest.getRequestHeader())
}
export default TokenApi;
import HeaderRequest from '../../lib/header-request';
const SERVER_URL = 'http://localhost:9001/api'
class ConnectionApi{
	constructor(action$, store, deps) {
        this.action$ = action$;
        this.store = store;
        this.deps = deps;
    }

    getAll = (payload) => this.deps.ajax
    	.getJSON(`${SERVER_URL}/connections/application/${payload.app}`, HeaderRequest.getRequestHeader())
    
    post = (payload) => this.deps.ajax
    	.post(`${SERVER_URL}/connections`,payload,  HeaderRequest.getRequestHeader())
}
export default ConnectionApi;
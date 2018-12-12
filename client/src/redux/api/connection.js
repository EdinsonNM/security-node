import HeaderRequest from '../../lib/header-request';
const SERVER_URL = process.env.REACT_APP_SERVER_URL
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
    
    put = ({_id, user, server, password, database}) => this.deps.ajax
        .put(`${SERVER_URL}/connections/${_id}`,{user, server, password, database},  HeaderRequest.getRequestHeader())
    
    delete = ({id}) => this.deps.ajax
    	.delete(`${SERVER_URL}/connections/${id}`, HeaderRequest.getRequestHeader())
}
export default ConnectionApi;
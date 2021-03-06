import HeaderRequest from '../../lib/header-request';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
class ApplicationApi{
	constructor(action$, store, deps) {
        this.action$ = action$;
        this.store = store;
        this.deps = deps;
    }

    getAll = (payload) => this.deps.ajax
      .getJSON(`${SERVER_URL}/applications`, HeaderRequest.getRequestHeader())
    
    post  = (payload) => this.deps.ajax
      .post(`${SERVER_URL}/applications`,payload,  HeaderRequest.getRequestHeader())
		//.takeUntil(this.action$.ofType(SERVICE_ACTIONS.CANCEL));
}
export default ApplicationApi;
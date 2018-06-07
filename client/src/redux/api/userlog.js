import HeaderRequest from '../../lib/header-request';
const SERVER_URL = 'api'
class UserLogApi{
    constructor(action$, store, deps) {
        this.action$ = action$;
        this.store = store;
        this.deps = deps;
    }

    getAll = ({app}) => this.deps.ajax
        .getJSON(`${SERVER_URL}/userlog/application/${app}`, {}, HeaderRequest.getRequestHeader())

}
export default UserLogApi;
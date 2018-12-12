import HeaderRequest from '../../lib/header-request';
const SERVER_URL = process.env.REACT_APP_SERVER_URL
class UserLogApi{
    constructor(action$, store, deps) {
        this.action$ = action$;
        this.store = store;
        this.deps = deps;
    }

    getAll = ({cnn}) => this.deps.ajax
        .getJSON(`${SERVER_URL}/userlog/${cnn}`, HeaderRequest.getRequestHeader())

}
export default UserLogApi;
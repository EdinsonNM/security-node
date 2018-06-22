import {STATUS_SERVICE} from '../../constants/services';
import USERLOG_ACTIONS from '../../constants/actions/userlog'
const defaultState = {
	statusService: STATUS_SERVICE.INITIAL,
	userlogs: [],
}
const UserLogReducer = (state = defaultState, {type, payload}) => {
	switch(type){
		case USERLOG_ACTIONS.LOAD:
			return {
				...state,
				statusService: STATUS_SERVICE.INPROGRESS,
				userlogs: [],
				error: null
			}
		case USERLOG_ACTIONS.LOAD_OK:
			return {
				...state,
				statusService: STATUS_SERVICE.SUCCESS,
				userlogs: payload
			}
		case USERLOG_ACTIONS.LOAD_ERROR:
			return {
				...state,
				statusService: STATUS_SERVICE.ERROR,
				error: payload,
				userlogs: [],
			}
		default:
			return {
				...state
			}
	}
}
export default UserLogReducer;
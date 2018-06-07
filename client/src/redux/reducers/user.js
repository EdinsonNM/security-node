import {STATUS_SERVICE} from '../../constants/services';
import USER_ACTIONS from '../../constants/actions/user'
import AuthToken from '../../lib/auth-token';
const defaultState = {
	statusService: STATUS_SERVICE.INITIAL,
	statusMeService: STATUS_SERVICE.INITIAL,
	connections: [],
}
const UserReducer = (state = defaultState, {type, payload}) => {
	switch(type){
		case USER_ACTIONS.LOGIN:
			return {
				...state,
				statusLoginService: STATUS_SERVICE.INPROGRESS,
				statusLogoutService: STATUS_SERVICE.INITIAL,
				statusMeService: STATUS_SERVICE.INITIAL,
				connections: [],
				error: null
			}
		case USER_ACTIONS.LOGIN_OK:
			AuthToken.setToken(payload)
			return {
				...state,
				statusLoginService: STATUS_SERVICE.SUCCESS,
				connections: payload
			}
		case USER_ACTIONS.LOGIN_ERROR:
			return {
				...state,
				statusLoginService: STATUS_SERVICE.ERROR,
				error: payload,
				connections: [],
			}
		case USER_ACTIONS.LOGIN_RESET:
			return {
				...state,
				statusLoginService: STATUS_SERVICE.INITIAL
			}
		case USER_ACTIONS.ME:
			return {
				...state,
				statusMeService: STATUS_SERVICE.INPROGRESS,
				user: null,
				error: null
			}
		case USER_ACTIONS.ME_OK:
			return {
				...state,
				statusMeService: STATUS_SERVICE.SUCCESS,
				user: payload
			}
		case USER_ACTIONS.ME_ERROR:
			return {
				...state,
				statusMeService: STATUS_SERVICE.ERROR,
				error: payload,
				user: null,
			}
		case USER_ACTIONS.ME_RESET:
			return {
				...state,
				statusMeService: STATUS_SERVICE.INITIAL
			}
		case USER_ACTIONS.LOGOUT:
			return {
				...state,
				statusLogoutService: STATUS_SERVICE.INPROGRESS
			}
		case USER_ACTIONS.LOGOUT_OK:
			AuthToken.setToken();
			return {
				...state,
				statusLogoutService: STATUS_SERVICE.SUCCESS,
				statusMeService: STATUS_SERVICE.INITIAL
			}
		case USER_ACTIONS.LOGOUT_ERROR:
			return {
				...state,
				statusLogoutService: STATUS_SERVICE.ERROR
			}
		default:
			return {
				...state
			}
	}
}
export default UserReducer;
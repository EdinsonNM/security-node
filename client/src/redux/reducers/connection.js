import {STATUS_SERVICE} from '../../constants/services';
import CONNECTION_ACTIONS from '../../constants/actions/connection';
const defaultState = {
	statusService: STATUS_SERVICE.INITIAL,
	connections: [],
}
const ConnectionReducer = (state = defaultState, {type, payload}) => {
	switch(type){
		case CONNECTION_ACTIONS.LOAD:
			return {
				...state,
				statusService: STATUS_SERVICE.INPROGRESS,
				connections: [],
				error: null
			}
		case CONNECTION_ACTIONS.LOAD_OK:
			return {
				...state,
				statusService: STATUS_SERVICE.SUCCESS,
				connections: payload
			}
		case CONNECTION_ACTIONS.LOAD_ERROR:
			return {
				...state,
				statusService: STATUS_SERVICE.ERROR,
				error: payload,
				connections: [],
			}
		case CONNECTION_ACTIONS.SAVE:
			return {
				...state,
				statusService: STATUS_SERVICE.INPROGRESS
			}
		case CONNECTION_ACTIONS.SAVE_OK:
			return {
				...state,
				statusService: STATUS_SERVICE.SUCCESS
			}
		case CONNECTION_ACTIONS.SAVE_ERROR:
			return {
				...state,
				statusService: STATUS_SERVICE.ERROR
			}
		case CONNECTION_ACTIONS.UPDATE:
			return {
				...state,
				statusService: STATUS_SERVICE.INPROGRESS
			}
		case CONNECTION_ACTIONS.UPDATE_OK:
			return {
				...state,
				statusService: STATUS_SERVICE.SUCCESS
			}
		case CONNECTION_ACTIONS.UPDATE_ERROR:
			return {
				...state,
				statusService: STATUS_SERVICE.ERROR
			}
		case CONNECTION_ACTIONS.DELETE:
			return {
				...state,
				statusService: STATUS_SERVICE.INPROGRESS
			}
		case CONNECTION_ACTIONS.DELETE_OK:
			return {
				...state,
				statusService: STATUS_SERVICE.SUCCESS
			}
		case CONNECTION_ACTIONS.DELETE_ERROR:
			return {
				...state,
				statusService: STATUS_SERVICE.ERROR
			}
		default:
			return {
				...state
			}
	}
}
export default ConnectionReducer;
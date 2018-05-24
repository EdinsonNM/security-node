import APPLICATION_ACTIONS from '../../constants/actions/application';
import {STATUS_SERVICE} from '../../constants/services';
const defaultState = {
	statusService: STATUS_SERVICE.INITIAL,
	applications: [],
}
const ApplicationReducer = (state = defaultState, {type, payload}) => {
	switch(type){
		case APPLICATION_ACTIONS.LOAD:
			return {
				...state,
				statusService: STATUS_SERVICE.INPROGRESS,
				applications: [],
				error: null
			}
		case APPLICATION_ACTIONS.LOAD_OK:
			return {
				...state,
				statusService: STATUS_SERVICE.SUCCESS,
				applications: payload
			}
		case APPLICATION_ACTIONS.LOAD_ERROR:
			return {
				...state,
				statusService: STATUS_SERVICE.ERROR,
				error: payload,
				applications: [],
			}
		case APPLICATION_ACTIONS.SAVE:
			return {
				...state,
				statusService: STATUS_SERVICE.INPROGRESS
			}
		case APPLICATION_ACTIONS.SAVE_OK:
			return {
				...state,
				statusService: STATUS_SERVICE.SUCCESS
			}
		case APPLICATION_ACTIONS.SAVE_ERROR:
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
export default ApplicationReducer;
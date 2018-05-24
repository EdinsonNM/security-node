import {STATUS_SERVICE} from '../../constants/services';
import TOKEN_ACTIONS from '../../constants/actions/token';
const defaultState = {
	statusService: STATUS_SERVICE.INITIAL,
	token: { token: 'Genere un token para la aplicación seleccionada...'}
}
const TokenReducer = (state = defaultState, {type, payload}) => {
	switch(type){
		case TOKEN_ACTIONS.LOAD:
			return {
				...state,
				statusService: STATUS_SERVICE.INPROGRESS,
				token: null,
				error: null
			}
		case TOKEN_ACTIONS.LOAD_OK:
			return {
				...state,
				statusService: STATUS_SERVICE.SUCCESS,
				token: payload
			}
		case TOKEN_ACTIONS.LOAD_ERROR:
			return {
				...state,
				statusService: STATUS_SERVICE.ERROR,
				error: payload
			}
		case TOKEN_ACTIONS.SAVE:
			return {
				...state,
				statusService: STATUS_SERVICE.INPROGRESS
			}
		case TOKEN_ACTIONS.SAVE_OK:
			return {
				...state,
				token: payload,
				statusService: STATUS_SERVICE.SUCCESS
			}
		case TOKEN_ACTIONS.SAVE_ERROR:
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
export default TokenReducer;
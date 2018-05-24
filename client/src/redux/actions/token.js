import TOKEN_ACTIONS from '../../constants/actions/token';
class TokenAction{
	static load = (app) => ({
		type: TOKEN_ACTIONS.LOAD,
		payload: {
			app
		}
	})
	static loadOk = payload => ({
		type: TOKEN_ACTIONS.LOAD_OK,
		payload
	})
	static loadError = () => ({
		type: TOKEN_ACTIONS.LOAD_ERROR
	})
	static save = app => ({
		type: TOKEN_ACTIONS.SAVE,
		payload: {
			app
		}
	})
	static saveOk = payload => ({
		type: TOKEN_ACTIONS.SAVE_OK,
		payload
	})
	static saveError = payload => ({
		type: TOKEN_ACTIONS.SAVE_ERROR,
		payload
	})
}
export default TokenAction;
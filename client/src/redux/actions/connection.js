import CONNECTION_ACTIONS from '../../constants/actions/connection';
class ConnectionAction{
	static load = (app) => ({
		type: CONNECTION_ACTIONS.LOAD,
		payload: {
			app
		}
	})
	static loadOk = payload => ({
		type: CONNECTION_ACTIONS.LOAD_OK,
		payload
	})
	static loadError = () => ({
		type: CONNECTION_ACTIONS.LOAD_ERROR
	})
	static save = payload => ({
		type: CONNECTION_ACTIONS.SAVE,
		payload
	})
	static saveOk = payload => ({
		type: CONNECTION_ACTIONS.SAVE_OK,
		payload
	})
	static saveError = payload => ({
		type: CONNECTION_ACTIONS.SAVE_ERROR,
		payload
	})
}
export default ConnectionAction;
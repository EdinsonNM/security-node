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
	static update = payload => ({
		type: CONNECTION_ACTIONS.UPDATE,
		payload
	})
	static updateOk = payload => ({
		type: CONNECTION_ACTIONS.UPDATE_OK,
		payload
	})
	static updateError = payload => ({
		type: CONNECTION_ACTIONS.UPDATE_ERROR,
		payload
	})
	static delete = (_app,id) => ({
		type: CONNECTION_ACTIONS.DELETE,
		payload: {
			_app,
			id
		}
	})
	static deleteOk = () => ({
		type: CONNECTION_ACTIONS.DELETE_OK
	})
	static deleteError = payload => ({
		type: CONNECTION_ACTIONS.DELETE_ERROR,
		payload
	})
}
export default ConnectionAction;
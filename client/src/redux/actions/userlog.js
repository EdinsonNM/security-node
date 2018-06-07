import USERLOG_ACTIONS from '../../constants/actions/userlog';
class UserLogAction{
	static load = (app) => ({
		type: USERLOG_ACTIONS.LOAD,
		payload: {
			app
		}
	})
	static loadOk = payload => ({
		type: USERLOG_ACTIONS.LOAD_OK,
		payload
	})
	static loadError = () => ({
		type: USERLOG_ACTIONS.LOAD_ERROR
	})

}
export default UserLogAction;
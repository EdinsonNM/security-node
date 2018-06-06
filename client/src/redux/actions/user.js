import USER_ACTIONS from '../../constants/actions/user';
class UserAction{
	static login = (username, password) => ({
		type: USER_ACTIONS.LOGIN,
		payload: {
			username,
			password
		}
	})
	static loginOk = payload => ({
		type: USER_ACTIONS.LOGIN_OK,
		payload
	})
	static loginError = payload => ({
		type: USER_ACTIONS.LOGIN_ERROR,
		payload
	})
	static loginReset = () => ({
		type: USER_ACTIONS.LOGIN_RESET
	})
	static me = () => ({
		type: USER_ACTIONS.ME
	})
	static meOk = payload => ({
		type: USER_ACTIONS.ME_OK,
		payload
	})
	static meError = payload => ({
		type: USER_ACTIONS.ME_ERROR,
		payload
	})
	static meReset = () => ({
		type: USER_ACTIONS.ME_RESET
	})
	static logout = payload => ({
		type: USER_ACTIONS.LOGOUT,
		payload
	})
	static logoutOk = payload => ({
		type: USER_ACTIONS.LOGOUT_OK,
		payload
	})
	static logoutError = payload => ({
		type: USER_ACTIONS.LOGOUT_ERROR,
		payload
	})
}
export default UserAction;
import APPLICATION_ACTIONS from '../../constants/actions/application';
class ApplicationAction{
	static loadApplications = () => ({
		type: APPLICATION_ACTIONS.LOAD
	})
	static loadApplicationsOk = payload => ({
		type: APPLICATION_ACTIONS.LOAD_OK,
		payload
	})
	static loadApplicationsError = () => ({
		type: APPLICATION_ACTIONS.LOAD_ERROR
	})
	static saveApplication = payload => ({
		type: APPLICATION_ACTIONS.SAVE,
		payload
	})
	static saveApplicationOk = payload => ({
		type: APPLICATION_ACTIONS.SAVE_OK,
		payload
	})
	static saveApplicationError = payload => ({
		type: APPLICATION_ACTIONS.SAVE_ERROR,
		payload
	})
}
export default ApplicationAction;
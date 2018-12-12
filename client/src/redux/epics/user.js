import USER_ACTIONS from '../../constants/actions/user'
import UserAction from '../actions/user'
import UserApi from '../api/user'
import { Observable } from 'rxjs-compat';
import { switchMap, catchError, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import AuthToken from '../../lib/auth-token';
import 'rxjs/add/operator/mergeMap'

class UserEpic{
	static login = (action$, store, deps) => action$.pipe(
		ofType(USER_ACTIONS.LOGIN),
		switchMap(({ payload }) => {
			const api = new UserApi(action$, store, deps);
			const request = api.login(payload)
				.map(response =>UserAction.loginOk(response.response.token))
				.catch(error => Observable.of(UserAction.loginError({
					message: error.message,
					status: error.status
				})));
			return Observable.concat(
				request
			);
		})
	)
	static logout = (action$, store, deps) => action$.pipe(
		ofType(USER_ACTIONS.LOGOUT),
		switchMap(({ payload }) => {
			const api = new UserApi(action$, store, deps);
			const request = api.logout()
				.mergeMap(response => Observable.concat(
					Observable.of(UserAction.logoutOk(response.response.token)),
					Observable.of(UserAction.me())
				))
				.catch(error => Observable.of(UserAction.logoutError({
					message: error.message,
					status: error.status
				})));
			return Observable.concat(
				request
			);
		})
	)
	static me = (action$, store, deps) => action$.pipe(
		ofType(USER_ACTIONS.ME),
		switchMap(() => {
			const api = new UserApi(action$, store, deps);
			const request = api.me()
				.map(response =>UserAction.meOk(response.response))
				.catch(error => Observable.of(UserAction.meError({
					message: error.message,
					status: error.status
				})));
			return Observable.concat(
				request
			);
		})
	)
}


export default function UserEpics (action$, store, deps){
	return Observable.merge(
		UserEpic.login(action$, store, deps),
		UserEpic.me(action$, store, deps),
		UserEpic.logout(action$, store, deps),
	);
} 
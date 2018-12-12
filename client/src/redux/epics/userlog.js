import { Observable } from 'rxjs-compat';
import { switchMap, catchError, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import ConnectionAction from '../actions/connection';
import USERLOG_ACTIONS from '../../constants/actions/userlog'
import UserLogApi from '../api/userlog'
import UserLogAction from '../actions/userlog'

class UserLogEpic{
	static load = (action$, store, deps) => action$.pipe(
		ofType(USERLOG_ACTIONS.LOAD),
		switchMap(({ payload }) => {
			const api = new UserLogApi(action$, store, deps);
			const request = api.getAll(payload)
				.map(UserLogAction.loadOk)
				.catch(error => Observable.of(UserLogAction.loadError({
					message: error.message,
					status: error.status
				})));
			return Observable.concat(
				request
			);
		})
	)

}

export default function UserLogEpics (action$, store, deps){
	return Observable.merge(
		UserLogEpic.load(action$, store, deps),
	);
} 
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/concat';
import ConnectionAction from '../actions/connection';
import USERLOG_ACTIONS from '../../constants/actions/userlog'
import UserLogApi from '../api/userlog'
import UserLogAction from '../actions/userlog'

class UserLogEpic{
	static load = (action$, store, deps) => action$
		.ofType(USERLOG_ACTIONS.LOAD)
		.switchMap(({ payload }) => {
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
		});

}

export default function UserLogEpics (action$, store, deps){
	return Observable.merge(
		UserLogEpic.load(action$, store, deps),
	);
} 
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/concat';
import TokenAction from '../actions/token';
import TokenApi from '../api/token';
import CONNECTION_ACTIONS from '../../constants/actions/connection';
import ConnectionApi from '../api/connection';
import ConnectionAction from '../actions/connection';

class ConnectionEpic{
	static load = (action$, store, deps) => action$
		.ofType(CONNECTION_ACTIONS.LOAD)
		.switchMap(({ payload }) => {
			const api = new ConnectionApi(action$, store, deps);
			const request = api.getAll(payload)
				.map(ConnectionAction.loadOk)
				.catch(error => Observable.of(ConnectionAction.loadError({
					message: error.message,
					status: error.status
				})));
			return Observable.concat(
				request
			);
		});
	static save = (action$, store, deps) => action$
		.ofType(CONNECTION_ACTIONS.SAVE)
		.switchMap(({ payload }) => {
			const api = new ConnectionApi(action$, store, deps);
			const request = api.post(payload)
				.map((response) => ConnectionAction.saveOk(response.response))
				.catch(error => Observable.of(ConnectionAction.saveError({
					message: error.message,
					status: error.status
				})));
			return Observable.concat(
				request,
				Observable.of(ConnectionAction.load(payload._app))
			);
		});
}

export default function ConnectionEpics (action$, store, deps){
	return Observable.merge(
		ConnectionEpic.load(action$, store, deps),
		ConnectionEpic.save(action$, store, deps),
	);
} 
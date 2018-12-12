import { Observable } from 'rxjs-compat';
import { switchMap, catchError, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';

import TokenAction from '../actions/token';
import TokenApi from '../api/token';
import CONNECTION_ACTIONS from '../../constants/actions/connection';
import ConnectionApi from '../api/connection';
import ConnectionAction from '../actions/connection';

class ConnectionEpic{
	static load = (action$, store, deps) => action$.pipe(
		ofType(CONNECTION_ACTIONS.LOAD),
		switchMap(({ payload }) => {
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
		})
	)
	static save = (action$, store, deps) => action$.pipe(
		ofType(CONNECTION_ACTIONS.SAVE),
		switchMap(({ payload }) => {
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
		})
	)
	static update = (action$, store, deps) => action$.pipe(
		ofType(CONNECTION_ACTIONS.UPDATE),
		switchMap(({ payload }) => {
			const api = new ConnectionApi(action$, store, deps);
			const request = api.put(payload)
				.map((response) => ConnectionAction.updateOk(response.response))
				.catch(error => Observable.of(ConnectionAction.updateError({
					message: error.message,
					status: error.status
				})));
			return Observable.concat(
				request,
				Observable.of(ConnectionAction.load(payload._app))
			);
		})
	)
	static delete = (action$, store, deps) => action$.pipe(
		ofType(CONNECTION_ACTIONS.DELETE),
		switchMap(({ payload }) => {
			const api = new ConnectionApi(action$, store, deps);
			const request = api.delete(payload)
				.map((response) => ConnectionAction.deleteOk())
				.catch(error => Observable.of(ConnectionAction.deleteError({
					message: error.message,
					status: error.status
				})));
			return Observable.concat(
				request,
				Observable.of(ConnectionAction.load(payload._app))
			);
		})
	)
}

export default function ConnectionEpics (action$, store, deps){
	return Observable.merge(
		ConnectionEpic.load(action$, store, deps),
		ConnectionEpic.save(action$, store, deps),
		ConnectionEpic.update(action$, store, deps),
		ConnectionEpic.delete(action$, store, deps),
	);
} 
import APPLICATION_ACTIONS from '../../constants/actions/application';
import { Observable } from 'rxjs-compat';
import { switchMap, catchError, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';

import TOKEN_ACTIONS from '../../constants/actions/token';
import TokenAction from '../actions/token';
import TokenApi from '../api/token';

class TokenEpic{
	static load = (action$, store, deps) => action$.pipe(
		ofType(TOKEN_ACTIONS.LOAD),
		switchMap(({ payload }) => {
			const api = new TokenApi(action$, store, deps);
			const request = api.getLastToken(payload)
				.map(TokenAction.loadOk)
				.catch(error => Observable.of(TokenAction.loadError({
					message: error.message,
					status: error.status
				})));
			return Observable.concat(
				request
			);
		})
	)
	static save = (action$, store, deps) => action$.pipe(
		ofType(TOKEN_ACTIONS.SAVE),
		switchMap(({ payload }) => {
			const api = new TokenApi(action$, store, deps);
			const request = api.post(payload)
				.map((response) => TokenAction.saveOk(response.response))
				.catch(error => Observable.of(TokenAction.saveError({
					message: error.message,
					status: error.status
				})));
			return Observable.concat(
				request
			);
		})
	)
}

export default function TokenEpics (action$, store, deps){
	return Observable.merge(
		TokenEpic.load(action$, store, deps),
		TokenEpic.save(action$, store, deps),
	);
} 
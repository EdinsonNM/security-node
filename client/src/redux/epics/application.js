import APPLICATION_ACTIONS from '../../constants/actions/application';
import ApplicationAction from '../actions/application';
import { Observable } from 'rxjs-compat';
import { switchMap, catchError, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import ApplicationApi from '../api/application';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/concat';

class ApplicationEpic{
	static load = (action$, store, deps) => action$.pipe(
		ofType(APPLICATION_ACTIONS.LOAD),
		switchMap(({ payload }) => {
			const api = new ApplicationApi(action$, store, deps);
			const request = api.getAll(payload)
				.map(ApplicationAction.loadApplicationsOk)
				.catch(error => Observable.of(ApplicationAction.loadApplicationsError({
					message: error.message,
					status: error.status
				})));
			return Observable.concat(
				request
			);
		})
	)
	static save = (action$, store, deps) => action$.pipe(
		ofType(APPLICATION_ACTIONS.SAVE),
		switchMap(({ payload }) => {
			const api = new ApplicationApi(action$, store, deps);
			const request = api.post(payload)
				.map(ApplicationAction.saveApplicationOk)
				.catch(error => Observable.of(ApplicationAction.saveApplicationError({
					message: error.message,
					status: error.status
				})));
			return Observable.concat(
				request,
				Observable.of(ApplicationAction.loadApplications())
			);
		})
	)
}

export default function ApplicationEpics (action$, store, deps){
	return Observable.merge(
		ApplicationEpic.load(action$, store, deps),
		ApplicationEpic.save(action$, store, deps),
	);
} 
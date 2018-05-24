import { combineEpics } from 'redux-observable';
import ApplicationEpics from './application';
import TokenEpics from './token';
import ConnectionEpics from './connection';

export default combineEpics(
	ApplicationEpics,
	TokenEpics,
	ConnectionEpics
);

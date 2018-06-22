import { combineEpics } from 'redux-observable';
import ApplicationEpics from './application';
import TokenEpics from './token';
import ConnectionEpics from './connection';
import UserEpics from './user';
import UserLogEpics from './userlog';

export default combineEpics(
	ApplicationEpics,
	TokenEpics,
	ConnectionEpics,
	UserEpics,
	UserLogEpics
);

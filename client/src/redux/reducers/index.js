import { combineReducers } from 'redux';
import ApplicationReducer from './application';
import TokenReducer from './token';
import ConnectionReducer from './connection';
import UserReducer from './user';
import UserLogReducer from './userlog';

export default combineReducers({
	ApplicationReducer,
	TokenReducer,
	ConnectionReducer,
	UserReducer,
	UserLogReducer
});

import {combineReducers} from 'redux';
import users from './users';

const AppReducer  = combineReducers({
	users
});

export default AppReducer;
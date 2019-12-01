import {combineReducers} from 'redux';
import tables from './tables';
import users from './users';
import user from './user';

const rootReducer = combineReducers({tables,users,user});
export default rootReducer;
import {combineReducers} from 'redux';
import UserReducer from './users-reducer';
import ActiveUserReducer from './reducer-active-user'

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer
});

export default allReducers;
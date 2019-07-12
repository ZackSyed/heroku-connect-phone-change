import { combineReducers } from 'redux'; 
import SessionReducer from './session_reducer';
// import ErrorReducer from './error_reducer';
// import UserReducer from './user_reducer'

export default combineReducers({
    session: SessionReducer, 
    // errors: ErrorReducer,
    // users:  UserReducer,
});
import { combineReducers } from 'redux';
import CheckGridList from "./checkGridList";
import GetLogin from "./getLogin";
const rootReducer=combineReducers({
    GetLogin,
    CheckGridList
});
export default rootReducer;

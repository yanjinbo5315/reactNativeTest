import { combineReducers } from 'redux';
import {Login_In_Name,Login_In_passWord} from "../actions/action";
let initState={
    name:"",
    passWord:""
};
function GetLogin(state=initState,action) {
    switch (action.type){
        case Login_In_Name:
            console.log("解析用户名动作");
            return Object.assign({},state,{
               name:action.name,
            });
        case Login_In_passWord:
            console.log("解析密码动作");
            return Object.assign({},state,{
                passWord:action.passWord
            });
        default:
            return state;
    }
}
const rootReducer=combineReducers({
    log:GetLogin,
});
export default rootReducer;
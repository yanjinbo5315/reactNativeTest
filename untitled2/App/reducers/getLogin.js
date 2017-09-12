import { combineReducers } from 'redux';
import {Login_In_Name,Login_In_passWord} from "./../actions/action";
let initState={
    name:"",
    passWord:""
};
export default function GetLogin(state=initState,action) {
    console.log(action.name);
    switch (action.type){
        case Login_In_Name:
            console.log("解析用户名动作");
            return {
                ...state,
                name:action.name
            };

        case Login_In_passWord:
            console.log("解析密码动作");
            return {
                ...state,
                passWord:action.passWord
            };
        default:
            return state;
    }
}
// const rootReducer=combineReducers({
//     GetLogin,
// });
// export default rootReducer;
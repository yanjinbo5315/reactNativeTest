import {Check_GridList} from "./../actions/action";
const initData={
    check_GridList:[],
};
export default function CheckGridList(state=initData,action) {
    console.log(action.check_GridList);
    switch (action.type){
        case Check_GridList:
            console.log("解析了check_GridList动作");
            return {
                ...state,
                check_GridList:action.check_GridList
            };
        default:
            console.log("default1");
            return state;
    }
};
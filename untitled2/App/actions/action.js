export const Login_In_Name="Login_In_Name";
export const Login_In_passWord="Login_In_passWord";
export const Check_GridList="Check_GridList";
export function loginIn_Name(name) {
    console.log("发起了用户名动作");
    return{
        type:Login_In_Name,
        name:name,
    }
}
export function loginIn_passWord(passWord) {
    console.log("发起了密码动作");
    return{
        type:Login_In_passWord,
        passWord:passWord,
    }
}
export function check_GridList(item) {
    console.log("发起了GridList动作");
    return {
        type:Check_GridList,
        check_GridList:item
    }
}
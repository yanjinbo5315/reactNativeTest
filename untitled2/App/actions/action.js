const Login_In="Login_In";
export default function loginIn(name,passWord) {
    return{
        type:Login_In,
        name:name,
        passWord:passWord
    }
}
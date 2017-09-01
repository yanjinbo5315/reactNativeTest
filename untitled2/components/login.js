import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Main from "./main";
import forge from "node-forge";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            passWord: ""
        }
    }

    getUserName(txt) {
        this.setState({
            userName: txt
        })
    }

    getPassWord(txt) {
        this.setState({
            passWord: txt
        })
    }

    getLogin() {
        let userName = this.state.userName;
        let passWord = this.state.passWord;
        if (userName == "" || passWord == "") {
            alert("请输入账号密码")
        } else {
            let md = forge.md.md5.create();
            md.update(this.state.passWord);
            let passWordMd5 = md.digest().toHex();
            // let data={
            //     code:'login',
            //     name:userName,
            //     password:passWordMd5
            // };
            let formData = new FormData();
            formData.append('code', 'login');
            formData.append('name', userName);
            formData.append('password', passWord);
            // console.log(JSON.stringify(data));
            let url = "http://10.192.111.78:8080/exam/exam";
            let str = "?code=login&&" + "name=" + userName + "&&" + "password=" + passWord;
            let header = new Headers();
            header.append('Content-Type', 'application/json');
            header.append('Accept', 'application/json');
            fetch(url + str, {
                header: header
            })
                .then( (response) => response.json())
                .then( (responseData)=>{
                    console.log(responseData)
                    if(responseData.result){
                        this.props.navigation.navigate('Second', {
                            userInfo:responseData
                        })
                    }
                    else{
                        alert("账号密码错误");
                    }
                })
                .catch( (error) =>console.log(error))
                .done()
        }


    }

    render() {
        return (
            <View style={LoginCss.flex}>
                <View style={LoginCss.flex}></View>
                <View style={LoginCss.flex1}>
                    <View style={LoginCss.textView}>
                        <TextInput onChangeText={this.getUserName.bind(this)} underlineColorAndroid="transparent"
                                   style={LoginCss.textInput}/>
                    </View>
                    <View style={LoginCss.textView}>
                        <TextInput onChangeText={this.getPassWord.bind(this)} underlineColorAndroid="transparent"
                                   style={LoginCss.textInput}/>
                    </View>
                    <View style={LoginCss.btnView}>
                        <TouchableOpacity style={LoginCss.btn} onPress={this.getLogin.bind(this)}>
                            <Text style={LoginCss.btnTxt}>登录</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={LoginCss.flex}></View>
            </View>
        )

    }
}
;
const LoginCss = StyleSheet.create({
    flex: {
        flex: 1
    },
    flex1: {
        flex: 2
    },
    textView: {
        height: 60,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        height: 50,
        width: "80%",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        padding: 0,
        marginTop: 10
    },
    btnView: {
        height: 60,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    btn: {
        height: 60,
        width: "80%",
        backgroundColor: "#164579",
        borderRadius: 10,
    },
    btnTxt: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        flex: 1,
        marginTop: 15
    }
});
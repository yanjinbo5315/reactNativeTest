import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    TouchableNativeFeedback
} from 'react-native';

var Touch = React.createClass({
    getInitialState:function () {
        return {
            inputText:""
        }
    },
    onChangeText:function (text) {
        console.log(text);
      this.setState({
          inputText:text
      })
    },
    click: function () {
        alert(this.state.inputText);
    },
    render: function () {
        return (
            <View style={TouchCss.contain}>
                <View style={TouchCss.view}>
                    <TextInput onChangeText={this.onChangeText} placeholder="请输入内容" returnKeyType="search"></TextInput>
                </View>
                <TouchableOpacity style={TouchCss.tch} onPress={this.click}>
                    <Text style={TouchCss.tchText}>搜索</Text>
                </TouchableOpacity>
            </View>
        );
    }
});
const TouchCss = StyleSheet.create({
    contain: {
        height: 60,
        flexDirection: "row",
        width: "100%"
    },
    view: {
        marginTop: 5,
        flex: 3,
        borderWidth: 1,
        borderColor: "#E0E0E0"
    },
    tch: {
        marginTop: 5,
        flex: 1,
        backgroundColor: "#164579",
        marginLeft: 5,
        marginRight: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    tchText: {
        color: "white",

    }
});
module.exports = Touch;
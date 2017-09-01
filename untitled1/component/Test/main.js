import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
var Login=require("./login");
var Main=React.createClass({
    _back:function () {
        console.log(this.props.userName+","+this.props.passWord);
    },
    render:function () {
        return (
            <View style={MainCss.flex}>
                <View style={MainCss.header}>
                    <View style={MainCss.flex}>
                        <TouchableOpacity onPress={this._back}>
                        <Text style={MainCss.headerBack}>回退</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:4}}>
                        <Text style={MainCss.headerTitle}>主页</Text>
                    </View>
                </View>
                <View>
                </View>
            </View>
        );
    }
});
var MainCss=StyleSheet.create({
    flex:{
        flex:1
    },
    header:{
        height:50,
        width:"100%",
        flexDirection:"row",
        borderBottomWidth:1,
        borderBottomColor:"#E0E0E0"
    },
    headerBack:{
        color:"#0000FF",
        fontSize:14
    },
    headerTitle:{
        fontSize:16,
        textAlign:"center",
    }
});
module.exports=Main;
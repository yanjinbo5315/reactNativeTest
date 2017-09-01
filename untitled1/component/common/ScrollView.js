import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    RefreshControl,
    Image,
    TouchableOpacity
} from 'react-native';

var dataArray = [{
    name: "1",
    id: "a1",
    img: "./../img/1.png"
},
    {
        name: "2",
        id: "a2",
        img: "./../img/2.png"
    },
    {
        name: "3",
        id: "a3",
        img: "./../img/1.png"
    }
];
var Scroll = React.createClass({
    refresh: function () {
        console.log("刷新");
    },
    click: function () {
        console.log("点击");
    },
    render: function () {
        var data = [];
        for (var i = 0; i < dataArray.length; i++) {
            var tt = (
                <TouchableOpacity onPress={this.click}>
                    <View  style={ScrollCss.view}>
                        <Image resizeMode="contain" style={{height: 50, width: 50}} source={require("./../img/1.png")}/>
                        <Text style={{flex: 1}}>{dataArray[i].name}</Text>
                    </View>
                </TouchableOpacity>
            )
            data.push(tt);
        }
        return (
            <View style={ScrollCss.contain}>
                <ScrollView style={ScrollCss.scroll}
                            refreshControl={
                                <RefreshControl refreshing={false} onRefresh={this.refresh}></RefreshControl>
                            }>
                    {data}
                </ScrollView>
            </View>
        );
    }
});
const ScrollCss = StyleSheet.create({
    contain: {
        flex: 1,
        marginTop: 10
    },
    scroll: {
        flex: 1
    },
    view: {
        height: 50,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0"
    },
});
module.exports = Scroll;
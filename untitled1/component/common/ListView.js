import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    RefreshControl,
    Image,
    TouchableOpacity
} from 'react-native';

var content = [
    "1",
    "2",
    "3",
];
var content1 = [
    "2",
    "5",
    "6",
];
var ListV = React.createClass({
    getInitialState: function () {
        var ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
        return {
            dataSource: ds.cloneWithRows(content)
        }
    },
    refresh: function () {
        console.log("刷新");
        var ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
        this.setState({
            dataSource:ds.cloneWithRows(content1)
        })
    },
    _render_Row: function (data: string) {
        return (
            <View style={ListCss.item}>
                <Text>{data}</Text>
            </View>
        );
    },
    render: function () {
        return (
            <ListView style={ListCss.flex}
                      dataSource={this.state.dataSource}
                      renderRow={this._render_Row}
                      refreshControl={
                          <RefreshControl onRefresh={this.refresh} refreshing={false}/>}
            />
        );
    }
});
const ListCss = StyleSheet.create({
    flex: {
        flex: 1
    },
    item: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0"
    }
});
module.exports = ListV;
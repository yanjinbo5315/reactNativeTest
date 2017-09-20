import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList
} from 'react-native';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';

const data1 = ["1", "2", "3", "4","5","6","7","8","9"];
const data2 = ["a", "b", "c", "d","e","f","g","h","i"];
const data3 = ["A", "B", "C", "D","E","F","G","H","I"];
export default class Tab1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: data1,
        }
    }

    _scrollCheck = (obj) => {
        switch (obj) {
            case 0:
                this.setState({
                    listData: data1
                });
                break;
            case 1:
                this.setState({
                    listData: data2
                });
                break;
            case 2:
                this.setState({
                    listData: data3
                });
                break;
            default:
                break;
        }
    };
    _renderListItem = ({item}) => {
        return (
            <TouchableOpacity
                style={{
                    height: 50,
                    width: "100%",
                    backgroundColor: "white",
                    borderBottomWidth: 1,
                    borderBottomColor: "#E0E0E0"
                }}
                onPress={() => alert(item)}>
                <Text>{item}</Text>
            </TouchableOpacity>
        )
    };
    _keyExtractor = (item, index) => index;
    render() {
        return (
            <View style={Tab1Css.contain}>
                <View style={{flex:1,}}>
                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar />}
                    onChangeTab={(obj) => {
                        this._scrollCheck(obj.i)
                    }}
                    tabBarBackgroundColor="#fcfcfc"
                    tabBarActiveTextColor="#3e9ce9"
                    tabBarInactiveTextColor="#aaaaaa">
                    <Text tabLabel="whatfuck1"/>
                    <Text tabLabel="whatfuck2"/>
                    <Text tabLabel="whatfuck3"/>
                </ScrollableTabView>
                </View>
                <View style={{flex:7.8}}>
                    <FlatList
                        data={this.state.listData}
                        renderItem={this._renderListItem}
                        keyExtractor={this._keyExtractor}
                        style={{marginTop:0}}
                    >
                    </FlatList>
                </View>
            </View>
        )
    }
}
const Tab1Css = StyleSheet.create({
    contain: {
        flex: 1,
    },
    tabBarUnderline: {
        backgroundColor: '#3e9ce9',
        height: 2
    }
});
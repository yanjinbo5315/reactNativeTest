import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
export default class Tab1 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={Tab1Css.contain}>
                <ScrollableTabView
                    renderTabBar={()=><ScrollableTabBar />}
                    onChangeTab={(obj)=>{
                        console.log(obj.i);
                    }}
                    tabBarBackgroundColor="#fcfcfc"
                    tabBarUnderlineStyle={Tab1Css.tabBarUnderline}
                    tabBarActiveTextColor="#3e9ce9"
                    tabBarInactiveTextColor="#aaaaaa">
                    <Text tabLabel="whatfuck1" />
                    <Text tabLabel="whatfuck2" />
                    <Text tabLabel="whatfuck3" />
                </ScrollableTabView>
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
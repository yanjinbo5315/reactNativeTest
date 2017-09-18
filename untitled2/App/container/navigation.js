import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';
import Main from "./../pages/main";
import Login from "./../pages/login";
import List from "./../pages/list";
import Detail from "./../components/detail";
import Select from "./../pages/select"
import TabContainer1 from "./tabContainer1";
import TabContainer2 from "./tabContainer2";
const TabContainer = TabNavigator({
        Tab1: {
            screen: TabContainer1,
        },
        Tab2: {
            screen: TabContainer2,
        }
    },
    {
        lazy: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#3e9ce9',
            inactiveTintColor: '#999999',
            showIcon: false,
            style: {
                backgroundColor: '#fff',
                height:70,
                justifyContent:"center"
            },
            indicatorStyle: {
                opacity: 0
            },
            tabStyle: {
                padding: 0
            }
        }
    });
const App = StackNavigator({
        Login: {
            screen: Login,
            navigationOptions: {
                header: null
            },
        },
        Main: {
            screen: Main,
            navigationOptions: {
                headerTitle: "主页",
            }
        },
        List: {
            screen: List,
            navigationOptions: {
                headerTitle: "列表",
            }
        },
        Detail: {
            screen: Detail,
            navigationOptions: {
                headerTitle: "详细",
            }
        },
        Select: {
            screen: Select,
            navigationOptions: {
                headerTitle: "选项",
            }
        },
        Tab: {
            screen: TabContainer,
            navigationOptions: {
                headerLeft: null,
            }
        }
    }
);
export default class Navi extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <App/>
            </View>
        )
    }
};
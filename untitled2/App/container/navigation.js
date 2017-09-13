import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import {
    StackNavigator
} from 'react-navigation';
import Main from "./../pages/main";
import Login from "./../pages/login";
import List from "./../pages/list";
import Detail from "./../components/detail";
import Select from "./../pages/select"
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
import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import {
    StackNavigator
} from 'react-navigation';
import Main from "./main";
import Login from "./login";
import List from "./list";

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
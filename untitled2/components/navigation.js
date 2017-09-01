import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {
    StackNavigator
} from 'react-navigation';
import Main from "./main";
import Login from "./login";

const App = StackNavigator({
        First: {
            screen: Login,
            navigationOptions: {
                header:null
            },
        },
        Second: {
            screen: Main,
            navigationOptions: {
                headerTitle:"主页",
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
            <View style={{flex:1}}>
                <App />
            </View>
        )
    }
};
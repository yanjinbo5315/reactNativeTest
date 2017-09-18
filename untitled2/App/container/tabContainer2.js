import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Tab2 from "./../pages/tab2";
export default class Main extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => ({
        title: 'Tab2',
    });
    render() {
        return (
            <View style={MainCss.contain}>
                <Tab2/>
            </View>
        )
    }
}
const MainCss = StyleSheet.create({
    contain: {
        flex: 1,
    },
});
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Tab2 from "./../pages/tab2";
export default class TabContainer2 extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => ({
        title: 'Tab2',
    });
    render() {
        return (
            <View style={TabContainer2Css.contain}>
                <Tab2/>
            </View>
        )
    }
}
const TabContainer2Css = StyleSheet.create({
    contain: {
        flex: 1,
    },
});
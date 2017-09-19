import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Tab1 from "./../pages/tab1";

export default class TabContainer1 extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => ({
        title: 'Tab1',
    });
    render() {
        return (
            <View style={TabContainer1Css.contain}>
                <Tab1/>
            </View>
        )
    }
}
const TabContainer1Css = StyleSheet.create({
    contain: {
        flex: 1,
    },
});
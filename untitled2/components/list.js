import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={MainCss.contain}>
            </View>
        )
    }
}
const MainCss = StyleSheet.create({
    contain: {
        flex: 1,
    }
});
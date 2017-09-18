import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Tab2 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={Tab2Css.contain}>
                <Text>Tab2</Text>
            </View>
        )
    }
}
const Tab2Css = StyleSheet.create({
    contain: {
        flex: 1,
    },
});
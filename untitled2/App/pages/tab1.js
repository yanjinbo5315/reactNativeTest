import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Tab1 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={Tab1Css.contain}>
                <Text>Tab1</Text>
            </View>
        )
    }
}
const Tab1Css = StyleSheet.create({
    contain: {
        flex: 1,
    },
});
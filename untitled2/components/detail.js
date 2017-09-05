import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Detail extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={DetailCss.contain}>
                <Text>
                    { this.props.navigation.state.params.data[0].txt}
                </Text>
            </View>
        )
    }
}
const DetailCss = StyleSheet.create({
    contain: {
        flex: 1,
    },
});
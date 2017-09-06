import React, {Component} from 'react';
import {
    ActivityIndicator,
    View,
} from 'react-native';

export default class Actvity extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator
                    animating={true}
                    size="large"
                />
            </View>
        )
    }
}
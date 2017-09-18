import React, {Component} from 'react';
import { ViewPropTypes, Text, TouchableOpacity } from 'react-native';
import {PropTypes} from 'prop-types';
const propTypes={
    onPress:PropTypes.func,
    txt:PropTypes.string,
    txtStyle: Text.propTypes.style,
    containerStyle: ViewPropTypes.style,
};
export default class Button extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <TouchableOpacity style={this.props.containerStyle} onPress={this.props.onPress}>
                <Text style={this.props.txtStyle}>{this.props.txt}</Text>
            </TouchableOpacity>
        )
    }
}
Button.propTypes=propTypes;
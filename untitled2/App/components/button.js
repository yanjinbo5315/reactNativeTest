import React, {Component} from 'react';
import { ViewPropTypes, Text, TouchableOpacity } from 'react-native';

// const propTypes = {
//     onPress: PropTypes.func,
//     txtStyle: Text.propTypes.style,
//     containerStyle: ViewPropTypes.style,
//     txt: PropTypes.string,
// };
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
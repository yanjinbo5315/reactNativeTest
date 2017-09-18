import React, {Component} from 'react';
import {
    TouchableOpacity,
    View,
    Image,
    Text
} from 'react-native';
import {PropTypes} from 'prop-types';
const propTypes={
    viewNum:PropTypes.number,
    viewStyle:PropTypes.object,
    viewItem: PropTypes.object,
    onPress: PropTypes.func,
    containerStyle:PropTypes.object,
    containerViewStyle:PropTypes.object,
    imgContainerStyle:PropTypes.object,
    imgSource:PropTypes.string,
    txtContainerStyle:PropTypes.string,
};
export default class ListItemWithPic extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const viewNum=Number(this.props.viewNum);//有几排内容
        console.log(viewNum);
        const {viewStyle}=this.props;
        const {viewItem}=this.props;
        console.log(viewItem[0]);
        let view=[];
          for(let i=0;i<viewNum;i++){
              let pp=(
                  <View key={i} style={viewStyle[i]}>
                      <Text>{viewItem[i]}</Text>
                  </View>
              );
              view.push(pp);
          }
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={this.props.containerStyle}>
                <View style={this.props.containerViewStyle}>
                    <View style={this.props.imgContainerStyle}>
                        <Image source={this.props.imgSource} style={{flex:1}}/>
                    </View>
                    <View style={this.props.txtContainerStyle}>
                        {view}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
ListItemWithPic.propTypes=propTypes;
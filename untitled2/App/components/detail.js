import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Actvity from './actvity';
export default class Detail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={DetailCss.contain}>
                <View style={DetailCss.imgView}>
                    <Image resizeMode="stretch"  style={DetailCss.flex} source={require("../../components/IMG/Chrysanthemum.jpg")} />
                </View>
                <View>
                    <Text></Text>
                </View>
                <View>
                    <Text></Text>
                </View>
                <View>
                    <Text></Text>
                </View>
                <View>
                    <Text></Text>
                </View>
                {/*<Text>*/}
                    {/*{this.props.navigation.state.params.data}*/}
                {/*</Text>*/}
            </View>
        )
    }
}
const DetailCss = StyleSheet.create({
    contain: {
        flex: 1,
    },
    flex:{
      flex:1,
    },
    imgView:{
        height:"50%",
        width:"100%",
    },
});
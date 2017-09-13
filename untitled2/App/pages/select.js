import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import Button from "./../components/button";
const tt=["1","2","3","4","5","6","7","8"];
export default class Select extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let pp=[];
        tt.map((item,i)=>{
            let qq=(
                <View key={i} style={SelectCss.buttonView}>
                    <Button
                        containerStyle={SelectCss.buttonContainer}
                        txtStyle={SelectCss.buttonText}
                        onPress={()=>{alert("点击了"+item)}}
                        txt={item}
                    />
                </View>
            );
            pp.push(qq);
        });
        console.log(pp);
        return (
            <View style={SelectCss.contain}>
                <ScrollView
                    horizontal={true}
                    style={SelectCss.scrollView}>
                    {pp}
                </ScrollView>
            </View>
        )
    }
}
const SelectCss = StyleSheet.create({
    contain: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    scrollView:{
        width:"80%",
        height:"90%",
    },
    buttonView:{
        width:"100%",
        height:80,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    },
    buttonContainer:{
        width:"80%",
        height:"40%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        borderWidth:1,
        borderColor:"#E0E0E0"
    },
    buttonText:{
        fontSize:14
    }
});
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import Button from "./../components/button";

const tt = [{
    name:"1"
},{
    name:"2"
},{
    name:"3"
},{
    name:"4"
},{
    name:"5"
},{
    name:"6"
},{
    name:"7"
},];
import GridList from "./../components/gridList";

export default class Select extends Component {
    constructor(props) {
        super(props)
    }

    _renderItem(item,i) {
        return (
            <View key={i} style={SelectCss.contain}>
                <Button
                    containerStyle={SelectCss.buttonContainer}
                    txtStyle={SelectCss.buttonText}
                    onPress={() => {
                        alert("点击了" + item)
                    }}
                    txt={item}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={SelectCss.contain}>
                <GridList
                    renderItem={this._renderItem}
                    dataContent={tt}
                    perRowNum={3}
                    style={SelectCss.ListView}
                />
            </View>
        )
    }
}
const SelectCss = StyleSheet.create({
    contain: {
        flex: 1,
    },
    ListView: {
        flex:1,
        // alignItems:"center",
        // justifyContent:"center"
    },
    buttonView: {
        width: 100,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    buttonContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E0E0E0"
    },
    buttonText: {
        fontSize: 14
    }
});
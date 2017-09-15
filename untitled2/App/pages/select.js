import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import Button from "./../components/button";
import {connect} from 'react-redux';
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
let checkBox=[];
class Select extends Component {
    constructor(props) {
        super(props);
        this.state={
            checked:checkBox,
        }
    }

    _renderItem(item,i) {

        return (
            <View key={i} style={SelectCss.contain}>
                <Button
                    containerStyle={SelectCss.buttonContainer}
                    txtStyle={SelectCss.buttonText}
                    onPress={() => {

                    }}
                    txt={item}
                />
            </View>
        )
    }

    render() {
        const {check_GridList}=this.props;
        console.log(check_GridList);
        return (
            <View style={SelectCss.contain}>
                <GridList
                    renderItem={this._renderItem}
                    dataContent={tt}
                    perRowNum={3}
                    style={SelectCss.ListView}
                    {...this.props}
                />
            </View>
        )
    }
}
function select(store) {
    console.log(store);
    const {check_GridList}=store.CheckGridList;
    return{
        check_GridList:check_GridList
    };
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
        fontSize: 14,
        color:"#333333"
    },
    buttonContainer_check: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor:"blue",
        borderWidth: 1,
        borderColor: "#E0E0E0"
    },
    buttonText_check: {
        fontSize: 14,
        color:"white"
    },
});
export default connect(select)(Select);
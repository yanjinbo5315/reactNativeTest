import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import Button from "./../components/button";
import {connect} from 'react-redux';
import {check_GridList} from "./../actions/action";
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
class Select extends Component {
    constructor(props) {
        super(props);
        const {check_GridListItem}=this.props;
        this.state={
            checked:check_GridListItem,
        }
    }
    _onClick=(item)=>{
        const {check_GridListItem}=this.props;
        const {dispatch}=this.props;
        if(check_GridListItem.indexOf(item)>-1){
            for(let i=0;i<check_GridListItem.length;i++){
               if(check_GridListItem[i]==item){
                   check_GridListItem.splice(i,1);
                   break;
               }
            }
        }else{
            check_GridListItem.push(item);
        }
        this.setState({
            checked:check_GridListItem
        });
        dispatch(check_GridList(check_GridListItem));
    };
    _renderItem=(item,i)=>{
        const onOroff=this.state.checked.indexOf(item)>-1?"1":"0";
        return (
            <View key={i} style={SelectCss.contain}>
                <Button
                    containerStyle={onOroff=="0"?SelectCss.buttonContainer:SelectCss.buttonContainer_check}
                    txtStyle={onOroff=="0"?SelectCss.buttonText:SelectCss.buttonText_check}
                    onPress={()=>this._onClick(item)}
                    txt={item}
                />
            </View>
        )
    }
    componentDidMount(){
        const {check_GridList}=this.props;
        console.log(check_GridList);
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
function select(store) {
    console.log(store);
    const {check_GridList}=store.CheckGridList;
    return{
        check_GridListItem:check_GridList
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
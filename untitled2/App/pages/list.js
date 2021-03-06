import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    ActivityIndicator
} from 'react-native';
import Actvity from '../components/actvity';
import ListItemWithPic from "./../components/listItemWithPic"
// var pp = [{
//     img: "",
//     txt: "1"
// }, {
//     img: "",
//     txt: "2"
// }, {
//     img: "",
//     txt: "3"
// }, {
//     img: "",
//     txt: "4"
// }, {
//     img: "",
//     txt: "5"
// }, {
//     img: "",
//     txt: "6"
// }, {
//     img: "",
//     txt: "7"
// }, {
//     img: "",
//     txt: "8"
// }, {
//     img: "",
//     txt: "9"
// }, {
//     img: "",
//     txt: "10"
// }];
export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            initData: "",
            searchData:"",
            selected: "",
            load:false
        }
    }

    _lastView = () => {
        return (
            <View style={{height: 80, width: "100%"}}>
            </View>
        )
    };

    _getData() {
        let url = "http://192.168.1.201:8080/exam/exam";
        let str = "?code=getGoods";
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        fetch(url + str, {
            header: header
        })
            .then((response)=>response.json())
            .then((responseData) => {
                console.log(responseData);
                if(responseData.result){
                    this.setState({
                        initData:responseData.data,
                        searchData:responseData.data,
                        load:true,
                    })
                }
                else{
                    alert("获取数据失败");
                }

            })
            .catch((error) => console.log(error))
            .done()
    }
    _refresh() {
        this.setState({
            searchData: this.state.initData,
            value: ""
        })
    }

    _renderItem = ({item},i) => {
        return (
            <ListItemWithPic
                onPress={() => this.props.navigation.navigate("Detail", {data: item.id})}
                containerStyle={ListCss.container}
                imgContainerStyle={ListCss.listImg}
                containerViewStyle={ListCss.listItem}
                imgSource={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
                txtContainerStyle={ListCss.listTxt}
                viewNum="3"
                viewStyle={[ListCss.listTxt_Frist,ListCss.listTxt_middle,ListCss.listTxt_Last]}
                viewItem={[item.name,item.content,"成都",item.price]}
            />
        )
    };
    _keyExtractor = (item, index) => index;

    _changeText(txt) {
        let tt = [];
        let pp=this.state.initData;
        for (let i = 0; i < pp.length; i++) {
            if (pp[i].name.indexOf(txt) > -1) {
                tt.push(pp[i]);
            }
        }
        this.setState({
            searchData: tt,
            value: txt,
        });
    }
    componentDidMount(){
        this._getData();
    }
    render() {
        if(!this.state.load){
            return <Actvity/>;
        }
        return (
            <View style={ListCss.contain}>
                <View style={{backgroundColor: "white"}}>
                    <TextInput style={ListCss.textInput} value={this.state.value}
                               onChangeText={this._changeText.bind(this)} underlineColorAndroid="transparent"
                               placeholder="请输入关键字进行查询"/>
                </View>
                <View>
                    <FlatList
                        data={this.state.searchData}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                        ListFooterComponent={this._lastView}
                        onRefresh={this._refresh.bind(this)}
                        refreshing={false}
                    />
                </View>
                <View style={{height: 100, width: "100%"}}/>
            </View>
        )
    }
}
const ListCss = StyleSheet.create({
    contain: {
        flex: 1,
    },
    flex: {
        flex: 1
    },
    container:{
        height:100,
        width:"100%",
        borderBottomWidth:1,
        borderBottomColor:"#666666"
    },
    textInput: {
        height: 50,
        width: "90%",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        padding: 0,
        margin: 15
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flex:1,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: "#999999"
    },
    listImg: {
        flex: 1,
        padding: 5
    },
    listTxt: {
        flex: 3,
        // padding:5
    },
    margin_left:{
      marginLeft:5
    },
    listTxt_Frist:{
      marginTop:5,
      marginLeft:5,
      flex:1,
    },
    listTxt_middle:{
        flex:1,
        marginTop:3,
        marginLeft:5,
    },
    listTxt_Last:{
        flex:1,
        marginTop:3,
        marginLeft:5,
    }
});
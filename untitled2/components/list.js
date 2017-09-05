import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
} from 'react-native';

var pp = [{
    img: "",
    txt: "1"
}, {
    img: "",
    txt: "2"
}, {
    img: "",
    txt: "3"
}, {
    img: "",
    txt: "4"
}, {
    img: "",
    txt: "5"
}, {
    img: "",
    txt: "6"
}, {
    img: "",
    txt: "7"
}, {
    img: "",
    txt: "8"
}, {
    img: "",
    txt: "9"
}, {
    img: "",
    txt: "10"
}];
export default class List extends Component {
    _lastView = () => {
        return (
            <View style={{height: 80, width: "100%"}}>
            </View>
        )
    };

    _renderItem = ({item}, i) => {
        return (
            <TouchableOpacity onPress={() => {
                let ee = [];
                for (let i = 0; i < pp.length; i++) {
                    if (pp[i].txt == item.txt) {
                        ee.push(pp[i]);
                    }
                }
                this.props.navigation.navigate("Detail",{data:ee});
                }
            } style={ListCss.flex}>
                <View style={ListCss.listItem}>
                    <View style={ListCss.listImg}>
                        <Image source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} style={{flex: 1}}/>
                    </View>
                    <View style={ListCss.listTxt}>
                        <Text>{item.txt}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    _keyExtractor = (item, index) => index;

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            data: pp,
            selected: ""
        }
    }

    _refresh() {
        this.setState({
            data: pp,
            value: ""
        })
    }

    _changeText(txt) {
        let tt = [];
        for (let i = 0; i < pp.length; i++) {
            if (pp[i].txt.indexOf(txt) > -1) {
                tt.push(pp[i]);
            }
        }
        this.setState({
            data: tt,
            value: txt,
        });
    }

    render() {
        return (
            <View style={ListCss.contain}>
                <View style={{backgroundColor: "white"}}>
                    <TextInput style={ListCss.textInput} value={this.state.value}
                               onChangeText={this._changeText.bind(this)} underlineColorAndroid="transparent"
                               placeholder="请输入关键字进行查询"/>
                </View>
                <View>
                    <FlatList
                        data={this.state.data}
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
        height: 80,
        width: "100%",
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
    }
});
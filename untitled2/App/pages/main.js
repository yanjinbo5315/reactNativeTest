import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    SectionList
} from 'react-native';
import {connect} from 'react-redux';
class Main extends Component {
    constructor(props) {
        super(props)
    }
    _renderItemView = ({item}) => {
        console.log(item);
        return (
            <View key={item.key} style={MainCss.itemView}>
                {
                    item.map((item, i) => this._renderItem(item, i))
                }
            </View>
        )
    }
    componentDidMount(){
        console.log()
    }
    _renderHeader = (txt) => {
        return (
            <View key={txt.section.key} style={MainCss.header}>
                <Text>{txt.section.key}</Text>
            </View>
        )
    }

    _onClick(name){
        switch (name){
            case "列表":
                this.props.navigation.navigate('List',{name:name});
                break;
            case "选项":
                this.props.navigation.navigate('Select',{name:name});
                break;
            case "金牛":
                alert("你点击的是金牛");
                break;
            case "航天":
                alert("你点击的是航天");
                break;
            case "其他":
                alert("你点击的是其他");
                break;
        }
    }
    _renderItem(item, i) {
        return (
            <TouchableOpacity
                key={item.name}
                refs="touch"
                data-index={item.name}
                style={MainCss.item}
                onPress={()=>this._onClick(item.name)}
            >
                <View style={MainCss.flexTxt}>
                    <Text>
                        {item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    _extraUniqueKey(item, index) {
        return "index" + index + item;
    }

    render() {
        let pp = [{
            key: 'J',
            data: [[{
                name: '列表'
            }, {
                name: '选项'
            }, {
                name: '金牛'
            }]]
        }, {
            key: 'H',
            data: [[{
                name: '航天'
            }]]
        }, {
            key: 'Q',
            data: [[{
                name: '其他'
            }]]
        }];
        const {name}=this.props;
        console.log(name);
        return (
            <View style={MainCss.contain}>
                <SectionList style={MainCss.sectionList}
                             renderItem={this._renderItemView}
                             renderSectionHeader={this._renderHeader}
                             sections={pp}
                             keyExtractor={this._extraUniqueKey}
                />
            </View>
        )
    }
}
function select(store) {
    const {check_GridList}=store.CheckGridList;
    const {name}=store.GetLogin;
    return{
        check_GridList:check_GridList,
        userName:name
    };
}
const MainCss = StyleSheet.create({
    contain: {
        flex: 1,
    },
    flex: {
        flex: 1
    },
    flexTxt: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    sectionList: {
        flex: 1,
    },
    itemView: {
        flex: 1,
        height: 80,
        flexDirection: "row",
    },
    header: {
        height: 40,
        width: "100%"
    },
    item: {

        width: "33.3%",
        backgroundColor: "white",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopColor: "#E0E0E0",
        borderBottomColor: "#E0E0E0",
        borderRightColor: "#E0E0E0",
        borderLeftColor: "#E0E0E0"
    }
});
export default connect(select)(Main);
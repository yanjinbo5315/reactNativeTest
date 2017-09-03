import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    SectionList
} from 'react-native';
export default class Main extends Component{
    constructor(props){
        super(props)
    }
    _renderItemView=({item})=>{
        return (
            <View key={item.key} style={MainCss.itemView}>
                {
                    item.map((item, i) => this._renderItem(item, i))
                }
            </View>
        )
    }
    _renderHeader=(txt)=>{
        return (
            <View key={txt.section.key} style={MainCss.header}>
                <Text>{txt.section.key}</Text>
            </View>
        )
    }

    _renderItem(item,i){
        return (
            <TouchableOpacity key={item.name} refs="touch" data-index={item.name}  style={MainCss.item} onPress={()=>console.log(item.name)}>
                <View style={MainCss.flexTxt}>
                    <Text>
                        {item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    render(){
        let pp=[{
            key:'J',
            data:[[{
                name:'教育'
            },{
                name:'金融'
            },{
                name:'金牛'
            }]]
        },{
            key:'H',
            data:[[{
                name:'航天'
            }]]
        },{
            key:'Q',
            data:[[{
                name:'其他'
            }]]
        }];
        return (
            <View style={MainCss.contain}>
                <SectionList style={MainCss.sectionList}
                    renderItem={this._renderItemView}
                    renderSectionHeader={this._renderHeader}
                    sections={pp}
                />
            </View>
        )
    }
}
const MainCss=StyleSheet.create({
   contain:{
       flex:1,
   },
    flex:{
       flex:1
    },
    flexTxt:{
       flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    sectionList:{
      flex:1,
      // justifyContent:"center"
    },
    itemView:{
       flex:1,
        height:80,
        flexDirection:"row",
    },
    header:{
       height:40,
        width:"100%"
    },
    item:{

        width:"33.3%",
        backgroundColor:"white",
        // border:1,
        // borderColor:"black"
        borderTopWidth:1,
        borderBottomWidth:1,
        borderRightWidth:1,
        borderLeftWidth:1,
        borderTopColor:"#E0E0E0",
        borderBottomColor:"#E0E0E0",
        borderRightColor:"#E0E0E0",
        borderLeftColor:"#E0E0E0"
    }
});
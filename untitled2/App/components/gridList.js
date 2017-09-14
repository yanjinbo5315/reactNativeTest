import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    SectionList,
    FlatList
} from 'react-native';

export default class GridList extends Component {
    constructor(props) {
        super(props);
    }

    _rebuild(perRowNum, dataContent) {
        let items = [];//每行显示内容
        let itemsGroup = [];//数据最后形成列数
        //整理数据
        dataContent.forEach((item) => {
            if (items.length === perRowNum) {
                itemsGroup.push(items);
                items = [item];
            }
            else {
                items.push(item);
            }
        });
        if (items.length > 0) {
            itemsGroup.push(items);
        }
        else {
        }
        console.log(itemsGroup);
        return itemsGroup;
    }
    _keyExtractor = (item, index) => index;
    _renderItemView = (items) => {
        const {perRowNum} = this.props; //每行列数
        const {dataContent} = this.props;//要展示的数据
        const {renderItem} = this.props;
        let pp=[];
        items.item.map((item,i)=>{
           pp.push(renderItem(item.name,i));
        });
        if(items.item.length===perRowNum){}
        else{
            let num=perRowNum-items.item.length;
            console.log(num);
            for(let i=0;i<num;i++){
                const tt=(
                    <View key={dataContent.length+i} style={GridListCss.contain} />
                );
                pp.push(tt);
            }
        }
        console.log(pp);
        return (
            <View style={GridListCss.listRow}>
                {pp}
            </View>
        )
    };

    render() {
        const {perRowNum} = this.props; //每行列数
        const {dataContent} = this.props;//要展示的数据
        const rebuild = this._rebuild(perRowNum, dataContent);
        return (
            <View style={GridListCss.contain}>
                <FlatList
                    data={rebuild}
                    renderItem={this._renderItemView}
                    style={this.props.style}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        )
    }
}
const GridListCss = StyleSheet.create({
    contain: {
        flex: 1,
    },
    listRow: {
        height: 100,
        width: "100%",
        flexDirection: "row",
    }
});
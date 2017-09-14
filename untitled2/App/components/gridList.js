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

    // renderItem(item){
    //     return (
    //         <View style={SelectCss.contain}>
    //             <Button
    //                 containerStyle={SelectCss.buttonContainer}
    //                 txtStyle={SelectCss.buttonText}
    //                 onPress={()=>{alert("点击了"+item)}}
    //                 txt={item}
    //             />
    //         </View>
    //     )
    // }
    // _renderItem(itemsGroup) {
    //     // const renderItem = this.renderItem;//获取要渲染的组件
    //     // const itemViews = itemsGroup.map((item) => {
    //     //     const i = renderItem(item);
    //     //     return i;
    //     // });
    //     return (
    //         <View style={{flex:1,flexDirection:"row"}}>
    //             {/*{itemViews}*/}
    //         </View>
    //     );
    // }
    _renderItemView = (items) => {
        console.log(items);
        const {renderItem} = this.props;
        const pp=[];
        items.map((item)=>{
           pp.push(renderItem(item));
        });
        return (
            <View style={GridListCss.listRow}>
                // items.map((item) =>renderItem(item))
                {pp}
            </View>
        )
    };

    render() {
        // const ds = new ListView.DataSource({
        //     rowHasChanged: (r1, r2) => r1 !== r2
        // });
        const {perRowNum} = this.props; //每行列数
        const {dataContent} = this.props;//要展示的数据
        const rebuild = this._rebuild(perRowNum, dataContent);
        return (
            <View style={GridListCss.contain}>
                <FlatList
                    data={rebuild}
                    renderItem={this._renderItemView}
                    style={this.props.style}
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
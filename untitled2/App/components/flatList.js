import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';

export default class FlatList extends Component {
    constructor(props) {
        super(props)
    }
    _renderItem = ({item}, i) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Detail", {data: item.id})}
                style={ListCss.flex}>
                <View style={ListCss.listItem}>
                    <View style={ListCss.listImg}>
                        <Image source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} style={{flex: 1}}/>
                    </View>
                    <View style={ListCss.listTxt}>
                        <View style={[ListCss.flex, ListCss.listTxt_Frist]}>
                            <Text style={{fontSize: 16}}>{item.name}</Text>
                        </View>
                        <View style={[ListCss.flex, ListCss.margin_left]}>
                            <Text style={{fontSize: 14}}>{item.content}</Text>
                        </View>
                        <View style={[ListCss.flex, ListCss.margin_left]}>
                            <Text style={{fontSize: 14}}>成都市</Text>
                        </View>
                        <View style={[ListCss.flex, ListCss.listTxt_Last, ListCss.margin_left]}>
                            <Text style={{
                                fontSize: 14,
                                color: "red",
                                textAlign: "right",
                                marginRight: 5
                            }}>¥{item.price}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    };

    render() {
        return (
            <View style={FlatListCss.flex}>
                <FlatList
                    data={this.props.data}
                    renderItem={this._renderItem}
                    keyExtractor={this.props.keyExtractor}
                    ListFooterComponent={this.props.ListFooterComponent}
                    onRefresh={this.props.onRefresh}
                    refreshing={this.props.refreshing}
                />
            </View>
        )
    }
}
const FlatListCss = StyleSheet.create({
    flex: {
        flex: 1,
    },
});
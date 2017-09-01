/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
// import {Navigator} from  'react-native-deprecated-custom-components';

var Touch = require("./component/common/TouchableOpacity");
var Scroll = require("./component/common/ScrollView");
var List=require("./component/common/ListView");
var Login=require("./component/Test/login");
// var Nav=React.createClass({
//     render:function () {
//         var defaultName = 'Login';
//         var defaultComponent = Login;
//         return (
//             <Navigator
//                 initialRoute={{ name: defaultName, component: defaultComponent }}
//                 configureScene={(route) => {
//                     //跳转的动画
//                     return Navigator.SceneConfigs.FadeAndroid;
//                 }}
//                 renderScene={(route, navigator) => {
//                     let Component = route.component;
//                     if(route.component){
//                         return <Component {...route.params}  navigator={navigator} />
//                     }
//                 }}
//             />
//         );
//     }
// });
export default class untitled1 extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <List/>
            </View>
        );
    }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('untitled1', () => untitled1);

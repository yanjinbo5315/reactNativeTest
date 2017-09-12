import { createStore } from "redux";
import GetLogin from "./../reducers/getLogin";
import { Provider } from "react-redux";
import Navi from "./../components/navigation";
import React, { Component } from 'react';
const store =createStore(GetLogin);
export default class  Store extends React.PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Provider store={store}>
                <Navi/>
            </Provider>
        )
    }
}
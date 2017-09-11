import { createStore } from "redux";
import rootReducer from "../reducers/getLogin";
import { Provider } from "react-redux";
import Navi from "../../components/navigation";
import React, { Component } from 'react';
const store =createStore(rootReducer);
export default class  Store extends Component{
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
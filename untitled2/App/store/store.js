import { createStore,applyMiddleware} from "redux";
import GetLogin from "./../reducers/getLogin";
import { Provider } from "react-redux";
import Navi from "./../container/navigation";
import rootReducer from "./../reducers/index"
import React, { Component } from 'react';
import Thunk from "redux-thunk";
const store =createStore(rootReducer);
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
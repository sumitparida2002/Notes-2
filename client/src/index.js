import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"
import {applyMiddleware, compose,legacy_createStore as createStore } from 'redux';
import ReactDOM from "react-dom/client"
import thunk from 'redux-thunk';

import App from "./App";
import './index.css'
import { reducers } from './reducers';



const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render( 
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
)


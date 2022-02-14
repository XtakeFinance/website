import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {MoralisProvider} from "react-moralis";

import store from "./store";
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <MoralisProvider appId="lvP4YKjTc5mJHFOw6yrTaaSssgKDsNj8ofAsbP9k"
                     serverUrl="https://etwl0rpd8mxs.usemoralis.com:2053/server">
        <Provider store={store}>
            <App/>
        </Provider>
    </MoralisProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

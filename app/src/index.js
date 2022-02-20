import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {MoralisProvider} from "react-moralis";

import store from "./store";
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

export const BITS_SERVER_URL = "https://w66dyodim54c.usemoralis.com:2053/server"
export const BITS_APP_ID = "8WMITIl0khMVfPRSMO1g4r3UZTaMQhINH91HEjBO"

export const SERVER_URL = "https://rzzxlj379wtf.usemoralis.com:2053/server"
export const APP_ID = "Ke8AutNfbaAx6qKXG1yv4pdrHxxrnOzs1FYZpPWP"

ReactDOM.render(
    <MoralisProvider appId={BITS_APP_ID}
                     serverUrl={BITS_SERVER_URL}>
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

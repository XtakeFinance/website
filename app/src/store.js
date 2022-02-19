import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from "./Reducers";
import {appSaga} from "./Sagas/appSaga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(appSaga)

export default store;
import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'

import reducers from "./Reducers";
import {appSaga} from "./Sagas/appSaga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(appSaga)

export default store;
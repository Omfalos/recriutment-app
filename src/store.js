import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import weatherReducer from "./reducers/weather";
import rootSaga from "./sagas";

const rootReducer = combineReducers({ weather: weatherReducer });

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" &&
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

let store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;

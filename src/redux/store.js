import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducers from "./reducers";
import thunk from 'redux-thunk';

const middleWare = [thunk];

export default createStore(rootReducers,
    composeWithDevTools(applyMiddleware(...middleWare))
    );
import {combineReducers} from "redux";
import nickReducer from "./nickReducers";
import chatReducer from "./chatReducer";
export default combineReducers({
    /* reducers added here */
    nickReducer,
    chatReducer
});
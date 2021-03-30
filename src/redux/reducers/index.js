import {combineReducers} from "redux";
import nickReducer from "./nickReducers";
import chatReducer from "./chatReducer";
import usersReducer from "./usersReducer";
export default combineReducers({
    /* reducers added here */
    nickReducer,
    chatReducer,
    usersReducer
});
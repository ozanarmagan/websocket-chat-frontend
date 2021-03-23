import {IS_SET, SET_NICK} from "../actionTypes";


const initialState = {
    nickname: null,
    isSet:false
}

export default function nickReducer(state=initialState,action) {
    switch(action.type)
    {
        case SET_NICK:
            return{
                ...state,
                nickname:action.payload
            };
        case IS_SET:
            return{
                ...state,
                isSet:action.payload
            }
        default:
            return state;
    }
}
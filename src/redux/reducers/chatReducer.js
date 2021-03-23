import {NEW_MESSAGE} from "../actionTypes";

const initialState = {
    messages: [
    {type:0,text:"denemee"},
    {type:1,user:"ozan",text:"AAAAAAAAA"},
]
}

export default function chatReducer(state=initialState,action) {
    switch(action.type)
    {
        case NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages,action.payload]
            }
        default:
            return state;
    }
}
import {ONLINE_USERS} from "../actionTypes";

const initialState = {
    users : []
}

export default function nickReducer(state=initialState,action) {
    switch(action.type)
    {
        case ONLINE_USERS:
            return{
                ...state,
                users:action.payload
            };
        default:
            return state;
    }
};

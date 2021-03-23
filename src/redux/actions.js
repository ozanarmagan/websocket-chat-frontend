import {SET_NICK,IS_SET, NEW_MESSAGE} from "./actionTypes";

export const setNick = nick => ({
    type: SET_NICK,
    payload: nick
});

export const isSet = value => ({
    type: IS_SET,
    payload:value
});

export const newMessage = data => ({
    type: NEW_MESSAGE,
    payload:data
});
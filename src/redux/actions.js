import {SET_NICK,IS_SET, NEW_MESSAGE,ONLINE_USERS} from "./actionTypes";

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

export const onlineUsers = data => ({
    type: ONLINE_USERS,
    payload:data
});
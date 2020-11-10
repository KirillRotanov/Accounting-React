import {ERR_LOGIN, REQ_LOGIN, SUC_LOGIN} from "../actions/loginAction";

export default function userInfo(userInfo=null, action) {

    const userInfoClone = {...userInfo}

    switch (action.type) {
        case REQ_LOGIN:
            userInfoClone.userInfo = action.payload;
            return userInfoClone;
        case ERR_LOGIN:
            userInfoClone.userInfo = action.payload;
            return userInfoClone;
        case SUC_LOGIN:
            userInfoClone.firstName = action.payload.firstName;
            userInfoClone.lastName = action.payload.lastName;
            userInfoClone.roles = action.payload.roles;
            return userInfoClone;
        default:
            return userInfo;
    }
}
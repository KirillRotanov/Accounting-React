import {ERR_REGISTER, REQ_REGISTER, SUC_REGISTER} from "../actions/registerAction";

export default function userInfo(userInfo={
    firstName: '',
    lastName : '',
    roles: ''
}, action) {

    const userInfoClone = {...userInfo}

    switch (action.type) {
        case REQ_REGISTER:
            userInfoClone.userInfo = action.payload;
            return userInfoClone;
        case ERR_REGISTER:
            userInfoClone.userInfo = action.payload;
            return userInfoClone;
        case SUC_REGISTER:
            userInfoClone.firstName = action.payload.firstName;
            userInfoClone.lastName = action.payload.lastName;
            userInfoClone.roles = action.payload.roles;
            return userInfoClone;
        default:
            return userInfo;
    }
}
import {ERR_PROFILE, REQ_PROFILE, SUC_PROFILE} from "../actions/profileActions";

export default function userInfo(userInfo=null, action) {

    const userInfoClone = {...userInfo}

    switch (action.type) {
        case REQ_PROFILE:
            userInfoClone.userInfo = action.payload;
            return userInfoClone;
        case ERR_PROFILE:
            userInfoClone.userInfo = action.payload;
            return userInfoClone;
        case SUC_PROFILE:
            // userInfoClone.firstName = action.payload.firstName;
            // userInfoClone.lastName = action.payload.lastName;
            // userInfoClone.roles = action.payload.roles;
            // return userInfoClone;
            return {...userInfo,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                roles: action.payload.roles
            }
        default:
            return userInfo;
    }
}
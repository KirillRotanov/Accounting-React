// import {ERR_LOGIN, REQ_LOGIN, SUC_LOGIN} from "../actions/loginAction";
//
// export const loginReducer = (state, action) => {
//     switch (action.type) {
//         case REQ_LOGIN:
//             return {...state, userInfo: action.payload}
//         case ERR_LOGIN:
//             return {...state, userInfo: action.payload}
//         case SUC_LOGIN:
//             return {
//                 ...state, userInfo: {
//                     firstName: action.payload.firstName,
//                     lastName: action.payload.lastName,
//                     roles: action.payload.roles
//                 }
//             };
//         default:
//             return state;
//     }
// }
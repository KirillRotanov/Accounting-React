// import {ERR_REGISTER, REQ_REGISTER, SUC_REGISTER} from "../actions/registerAction";
//
// export const registerReducer = (state, action) => {
//     switch (action.type) {
//         case REQ_REGISTER:
//             return {...state, userInfo: action.payload}
//         case ERR_REGISTER:
//             return {...state, userInfo: action.payload}
//         case SUC_REGISTER:
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
import {encode} from "base-64";
import {errorLoginAction, LOGIN_URL, requestLoginAction, successLoginAction} from "./loginAction";

export const REQ_PROFILE = "REQ_PROFILE";
export const ERR_PROFILE = "ERR_PROFILE";
export const SUC_PROFILE = "SUC_PROFILE";


export const requestProfileAction = () => ({
    type: REQ_PROFILE,
    payload: "Pending..."
});

// export const errorProfileAction = () => ({
//     type: ERR_PROFILE,
//     payload: "bad request"
// });

export const successProfileAction = (data) => ({
    type: SUC_PROFILE,
    payload: data
});

export const postProfileAction = (login, password) => {

    return dispatch => {
        dispatch(requestProfileAction());
        const data = JSON.parse(localStorage.getItem('data'));
        console.log(data);
        dispatch(successProfileAction(data));
    }
    // return dispatch => {
    //     dispatch(requestLoginAction());
    //     let headers = new Headers();
    //     headers.append('Authorization', 'Basic ' + encode((login + ":" + password)));
    //     fetch(LOGIN_URL, {
    //         method: 'POST',
    //         headers
    //     })
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.json();
    //             } else {
    //                 throw new Error('' + response.status);
    //             }
    //         })
    //         .then(data => {
    //             localStorage.setItem('auth', 'Basic ' + encode((login + ":" + password)));
    //             localStorage.setItem('data', JSON.stringify(data));
    //             dispatch(successLoginAction(data));
    //         })
    //         .catch(dispatch(errorLoginAction()));
    // }
};


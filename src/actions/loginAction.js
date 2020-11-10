import {encode} from "base-64";

export const REQ_LOGIN = "REQ_LOGIN";
export const ERR_LOGIN = "ERR_LOGIN";
export const SUC_LOGIN = "SUC_LOGIN";


export const LOGIN_URL = "https://webaccounting.herokuapp.com/account/login"

export const requestLoginAction = () => ({
    type: REQ_LOGIN,
    payload: "Pending..."
});

export const errorLoginAction = () => ({
    type: ERR_LOGIN,
    payload: "bad request"
});

export const successLoginAction = (data) => ({
    type: SUC_LOGIN,
    payload: data
});

export const postLoginAction = (login, password) => {

    return dispatch => {
        dispatch(requestLoginAction());
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + encode((login + ":" + password)));
        fetch(LOGIN_URL, {
            method: 'POST',
            headers
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => {
                localStorage.setItem('auth', 'Basic ' + encode((login + ":" + password)));
                localStorage.setItem('data', JSON.stringify(data));
                dispatch(successLoginAction(data));
            })
            .catch(dispatch(errorLoginAction()));
    }
};


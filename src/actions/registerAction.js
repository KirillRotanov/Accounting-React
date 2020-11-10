
export const REQ_REGISTER = "REQ_REGISTER";
export const ERR_REGISTER = "ERR_REGISTER";
export const SUC_REGISTER = "SUC_REGISTER";


export const REGISTER_URL = "https://webaccounting.herokuapp.com/account/user"

export const requestRegisterAction = () => ({
    type: REQ_REGISTER,
    payload: "Pending..."
});

export const errorRegisterAction = () => ({
    type: ERR_REGISTER,
    payload: "bad request"
});

export const successRegisterAction = (data) => ({
    type: SUC_REGISTER,
    payload: data
});

export const postRegisterAction = (firstName, lastName, login, password) => {
    return dispatch => {
        dispatch(requestRegisterAction());
        fetch(REGISTER_URL, {
            method: 'POST',
            body: JSON.stringify({
                firstName,
                lastName,
                login,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => {
                dispatch(successRegisterAction(data));
            })
            .catch(dispatch(errorRegisterAction()));
    }
};


import React, {useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import {PROFILE_PAGE, REGISTER_PAGE} from "../utils/constans";

const LoginPage = props => {

    const [logInput, setLogInput] = useState('');
    const [passInput, setPassInput] = useState('');

    const handleLoginButton = () => {
        props.login(logInput, passInput);
    }

    const handleRegisterButton = () => {
        return <Redirect to={`/error`}/>
    }

    return (
        <div>
            <input onChange={event => setLogInput(event.target.value)} type="text" placeholder="login"/>
            <input onChange={event => setPassInput(event.target.value)} type="password" placeholder="password"/>
            <Link to={`/${PROFILE_PAGE}`}>
                <button onClick={handleLoginButton}>login</button>
            </Link>
            <Link to={`/${REGISTER_PAGE}`}>
                <button onClick={handleRegisterButton}>register</button>
            </Link>
        </div>
    );
};

export default LoginPage;
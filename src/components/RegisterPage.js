import React, {useState} from 'react';

const RegisterPage = (props) => {

    const [firstNameInput, setFirstNameInput] = useState('');
    const [lastNameInput, setLastNameInput] = useState('');
    const [logInput, setLogInput] = useState('');
    const [passInput, setPassInput] = useState('');


    const handleSubmitButton = () => {
        props.register(firstNameInput, lastNameInput, logInput, passInput);
    }

    return (
        <div>
            <input onChange={event => setFirstNameInput(event.target.value)} type="text" placeholder="first name"/>
            <input onChange={event => setLastNameInput(event.target.value)} type="text" placeholder="last name"/>
            <input onChange={event => setLogInput(event.target.value)} type="text" placeholder="login"/>
            <input onChange={event => setPassInput(event.target.value)} type="password" placeholder="password"/>
            <button onClick={handleSubmitButton}>register</button>
        </div>
    );
};

export default RegisterPage;
import React, {useEffect} from 'react';

const ProfilePage = (props) => {

    const data = JSON.parse(localStorage.getItem('data'));

    if (data) {
        return (
            <div>
                <p>first name: {data.firstName}</p>
                <p>last name: {data.lastName}</p>
                <p>roles: {data.roles}</p>
                <button>edit profile</button>
                <button>edit password</button>
                <button>logout</button>
            </div>
        );
    } else {
        props.login();
    }
};

export default ProfilePage;
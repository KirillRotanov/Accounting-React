import React from 'react';
import {Switch, Redirect, Route} from "react-router-dom";
import {PROFILE_PAGE, REGISTER_PAGE} from "../utils/constans";
import LoginPage from "../containers/LoginPageContainer";
import ProfilePage from "../containers/ProfilePageContainer";
import RegisterPage from "../containers/RegisterPageContainer";

const Main = () => {

    const data = localStorage.getItem('data');
    return (
        <Switch>
            <Route exact path="/">
                {data ? <Redirect to={`/${PROFILE_PAGE}`} /> : <LoginPage/>}
            </Route>
            <Route path={`/${PROFILE_PAGE}`} component={ProfilePage}/>
            <Route path={`/${REGISTER_PAGE}`} component={RegisterPage}/>
        </Switch>
    );
};

export default Main;
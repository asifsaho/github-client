import React from 'react';
import {
    Route,
    Redirect,
} from 'react-router-dom';
import authService from '../service/authService'

const Auth = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        authService.checkLoginStatus() ? (<Component {...props}/>) : (<Redirect to={{pathname: '/login'}}/>)
    )}/>
);

export default Auth;

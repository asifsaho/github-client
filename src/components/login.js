import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {Redirect} from 'react-router';
import {observer} from 'mobx-react';
import authService from '../service/authService';

function goForGitHubLogin(){
    window.location = 'https://github.com/login/oauth/authorize?client_id=37e1266222ea598ab2ef&redirect_uri=http://localhost:3000/callback&scope=user repo'
}

@observer class Login extends Component {
    render(){
        return(
            <div className="v-h-center full-height">
                {(authService.checkLoginStatus()) ?
                    <Redirect to={{pathname: "/profile"}}/> :
                    <Button onClick={goForGitHubLogin}><i className="github-icon"/>Login With Github</Button>}
            </div>
        )
    }
}

export default Login;
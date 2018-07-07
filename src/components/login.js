import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {Redirect} from 'react-router';
import {observer} from 'mobx-react';
import authService from '../service/authService';
import appConfig from '../appConfig';

function goForGitHubLogin(){
    window.location = `${appConfig.OAuthEndPoint}?client_id=${appConfig.clientId}&redirect_uri=${appConfig.redirectUri}&scope=user repo`;
}

@observer class Login extends Component {
    render(){
        return(
            <div className="v-h-center full-height">
                {(authService.checkLoginStatus()) ?
                    <Redirect to={{pathname: "/profile"}}/> :
                    <Button onClick={goForGitHubLogin}><i className="github-icon margin-right-15"/>Login With Github</Button>}
            </div>
        )
    }
}

export default Login;
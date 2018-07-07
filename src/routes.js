import React, {Component} from 'react';
import Profile from './container/profile';
import Login from './components/login';
import Callback from './container/callback';
import Auth from './components/auth';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";

class Routes extends Component {
    render(){
        return(
            <div>
                <Router>
                    <div>
                        <Route exact path="/" render={() => <Redirect to={{pathname: "/login"}}/>} />
                        <Route exact path="/profile" render={() => <Auth component={Profile}/>} />
                        <Route exact path="/callback" render={() => <Callback/>} />
                        <Route exact path="/login" component={Login} />
                    </div>
                </Router>
            </div>
        )
    }
}


export default Routes;
import React, {Component} from 'react';
import axios from 'axios';
import appConfig from '../appConfig';

class Callback extends Component {
    constructor(){
        super();

        this.state = {
            message: 'Please wait ...'
        }
    }

    componentWillMount(){
        let code = window.location.search.split('code=')[1];
        const proxy = appConfig.proxy ? appConfig.proxy : '';
        axios({
            method: 'post',
            url: proxy + appConfig.accessTokenEndPoint,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            data: {
                client_id: appConfig.clientId,
                client_secret: appConfig.clientSecret,
                code: code
            }
        })
            .then((response) => {
                if(response.data.substr(0,5) === 'error') {
                    this.setState({message: 'We are sorry, something went wrong you can\'t log in, we are taking to the login page again'})
                    localStorage.clear();
                    window.location = '/login'
                }
                else {
                    localStorage.setItem('access_token', response.data);
                    window.location = '/profile'
                }
            })
            .catch(err => console.log(err))
    }


    render(){
        return(
            <div className="v-h-center full-height">
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}

export default Callback;
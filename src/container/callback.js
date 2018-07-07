import React, {Component} from 'react';
import axios from 'axios';

class Callback extends Component {
    constructor(){
        super();

        this.state = {
            message: 'Please wait while we are taking you to the mysterious island!'
        }
    }

    componentWillMount(){
        let code = window.location.search.split('code=')[1];
        const corsProxy = 'http://localhost:5050/';
        axios({
            method: 'post',
            url: corsProxy + 'https://github.com/login/oauth/access_token',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type' : 'application/json'
            },
            data: {
                client_id: "37e1266222ea598ab2ef",
                client_secret: "a00382fe21cc042f631c516e3c084dfb5ae07b43",
                code: code
            }
        })
            .then((response) => {
                localStorage.setItem('access_token', response.data);
                console.log(response.data)

                if(response.data.substr(0,5) === 'error') {
                    this.setState({message: 'We are sorry, something went wrong you can\'t log in, we are taking to the login page again'})
                    window.location = '/login'
                }
                else {
                    localStorage.setItem('access_token', response.data);
                    setTimeout(function(){
                        window.location = '/profile'
                    }, 1000)
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
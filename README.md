## This is a small Github client application prototype for test purpose. 

### First of all you need to create an application in github
- Please go here *https://github.com/settings/developers*
- Homepage URL should be *https://localhost:3000*
- Callback URL should be *http://localhost:3000/callback*
- Get the *Client ID* and *Client Secret* and place it in the *appConfig.js*
- After placing the keys the *appConfig.js* file should look like below

```
const appConfig = {
    clientId: '37e1266222ea598ab2ef',
    clientSecret: "a00382fe21cc042f631c516e3c084dfb5ae07b43",
    dataEndpoint: "https://api.github.com/graphql",
    OAuthEndPoint: 'https://github.com/login/oauth/authorize',
    accessTokenEndPoint: 'https://github.com/login/oauth/access_token',
    redirectUri: 'http://localhost:3000/callback',
    proxy: 'http://localhost:5050/'
};

export default appConfig;
```

### To Prepare the application please follow steps below
- ```git clone git@github.com:asifsaho/github-client.git ``` use http link if you don't have *SSH*
- enter to the folder ``cd github-client``
- Download required libraries ``npm install``

### Due to CORS Issue we need a proxy server. I made a config already there is a folder in the in *github-client* folder called *cors-proxy*.
- Move to the directory ``cd cors-proxy``
- install the libraries ``npm install``
- Run proxy server ``node index.js`` 


### All set lets run the Application
- From another terminal tab enter to the *github-client* folder
- Run ``npm start`` and you will see the application on browser, please make sure its running on 3000 port. If something already running on this port please stop it for a while
- Login with your github account.


### Features Developed
===================

- See Profile information
- Personal repositories including private and public and their link
- Repository details page with file list and readme file content
- Starred repository list by logged in users


# Cheers!

const appConfig = {
    clientId: '',
    clientSecret: '',
    dataEndpoint: 'https://api.github.com/graphql',
    OAuthEndPoint: 'https://github.com/login/oauth/authorize',
    accessTokenEndPoint: 'https://github.com/login/oauth/access_token',
    redirectUri: 'http://localhost:3000/callback',
    proxy: 'http://localhost:5050/'
};

export default appConfig;
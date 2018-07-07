class AuthService {
    checkLoginStatus (){
        return (localStorage.getItem('access_token'));
    }
}


export default new AuthService();
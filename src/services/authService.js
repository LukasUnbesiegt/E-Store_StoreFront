class AuthService {

    tokenKey = 'auth_token';

    getToken() {
        localStorage.getItem(this.tokenKey)
    }


    setToken(token) {
        localStorage.setItem(this.tokenKey, token)
    }

    deleteToken() {

        localStorage.removeItem(this.tokenKey)
    }



}


export default new AuthService();
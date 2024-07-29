import api from "../http";

export default class AuthService{
    static async login(email, password){
        api.post('/login', {"email": email, "password": password}).then((responce) => {
            localStorage.setItem('token', responce.data.accessToken);
        }).catch((e) => console.log(e))
    }

    static async registration(email, password){
        return api.post('/registration', {"email": email, "password": password}).then((responce) => {
            localStorage.setItem('token', responce.data.accessToken);
        })
    }
    
    static async logout(){
        return api.post('/logout').then(localStorage.removeItem('token'))
    }
}
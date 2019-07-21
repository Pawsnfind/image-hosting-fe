import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { DaFux } from './dafux';
import history from './history'

 

export default class Auth {

 
    auth0 = new auth0.WebAuth({
        domain: process.env.REACT_APP_AUTH0_DOMAIN,
        clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
        redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        responseType: 'token id_token',
        scope: 'openid profile email offline_access',
        sso: false
    })

    login = () => {
        this.auth0.authorize();
    }

    authenticate = () => {
        this.auth0.parseHash((err, authResult) => {
            if(err) {
                history.replace('/')
            }
            else {
                this.authBackend(authResult);
            }
        })
    }

    authBackend = async authResult => {

        let token = localStorage.getItem('auth');
        if (!token)
            token = authResult.idToken;

        const decoded = jwtDecode(token);

        localStorage.setItem('auth', token);
        localStorage.setItem('name', decoded.nickname);
        localStorage.setItem('profile', decoded.picture);

        const header = {
            headers : {
                Authorization: `${token}`,
              
            }
        }
   
        const addUser = await axios.post(
            process.env.REACT_APP_BACKEND_API,
           {"async": true,
            "crossDomain": true,
            "Content-Type": "application/json",
        },
            {
            headers : {
                Authorization: `${token}`,
              
            }
        }
        ).then(res => {
            console.log(res)
            DaFux.addValue('api_key', res.data.response);
            history.replace('/dashboard')
        });
        
  
        console.log("res " ,addUser)
   
    }
}

import { LOGIN_USER, AUTH_USER, REGISTER_USER, USER_SERVER, LOGOUT_USER } from './types'
import authService from '../services/authService'
import axiosService from '../services/axiosService'
import { asyncActionStart, asyncActionFinish } from './asyncActions'
import axios from 'axios'

import { endpoint, prodEndpoint } from '../config'

const URL = process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint
const axiosInstance = axiosService.getInstance();




export function registerUser(dataToSubmit) {
  //   const request = axios.post(`${USER_SERVER}/register`,dataToSubmit)
  //       .then(response => response.data);

  //   return {
  //       type: REGISTER_USER,
  //       payload: request
  //   }
}






export function loginUser(dataToSubmit, history) {



  return async (dispatch) => {

    try {
      dispatch(asyncActionStart())
      const response = await axios.post(`${URL}api/v1/users/login`, dataToSubmit);

      if (response) {
        console.log(response.data.token);
        await authService.setToken(response.data.token)

        history.push('/user')
        dispatch(asyncActionFinish())
      }


    } catch (error) {
      console.log(error)
    }



  }





}

export function auth(history) {

  //   const request = axios.get(`${USER_SERVER}/auth`)
  //   .then(response => response.data);

  //   return {
  //       type: AUTH_USER,
  //       payload: request
  //   }

  return async (dispatch) => {


    try {


      const userData = await axiosInstance.get('/users/auth');


      dispatch({
        type: AUTH_USER,
        payload: userData.data
      })

      // kick user out 
      if (!userData.data.isAuth) {
        history.push('/')
      }


    } catch (error) {
      console.log(error)
    }






  }




}


export const logoutUser = () => dispatch => {



  const tokenJWT = localStorage.getItem('auth_token');
  if (tokenJWT) {

    // localstorage and normal authentication pattern
    authService.deleteToken()
    window.location.reload()


  } else {

    // specific for oauth2 authentication destory
    // development


    var delete_cookie = function (name) {
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };

    delete_cookie('auth');
    window.location.reload()

  }

};



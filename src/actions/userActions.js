
import { LOGIN_USER, AUTH_USER, REGISTER_USER, USER_SERVER, LOGOUT_USER, GET_ERRORS } from './types'
import authService from '../services/authService'
import axiosService from '../services/axiosService'
import { asyncActionStart, asyncActionFinish } from './asyncActions'
import axios from 'axios'
import { isEmpty } from '../utils/isEmpty'
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

      if (response.data.success) {
        console.log(response.data.token);
        await authService.setToken(response.data.token)

        history.push('/admin')
        dispatch(asyncActionFinish())

      } else {

        dispatch({
          type: GET_ERRORS,
          payload: response.data.message
        })
        dispatch(asyncActionFinish())
      }


    } catch (error) {
      console.log(error)
    }



  }





}

export function auth(history, reload, currentUserData, adminRoute) {



  return async (dispatch) => {


    try {

      if (isEmpty(currentUserData)) {
        const userData = await axiosInstance.get('/users/auth');
        dispatch({
          type: AUTH_USER,
          payload: userData.data
        })


        if (!userData.data.isAuth && !reload) {
          history.push('/')
        }
      }





      // editing
      // kick user out 

    } catch (error) {
      console.log(error)
    }



  }
}

export const logoutUser = () => dispatch => {

  authService.deleteToken()
  window.location.reload()

};



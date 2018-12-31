import { GET_ERRORS, GET_CATEGORIES, UPLOAD_IMAGES } from './types';
import axios from 'axios'
import { asyncActionStart, asyncActionFinish } from './asyncActions'
import axiosService from '../services/axiosService'
import authService from '../services/authService'
import { isEmpty } from '../utils/isEmpty'
import { endpoint, prodEndpoint } from '../config'
import { toastr } from 'react-redux-toastr'

const URL = process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint
const axiosInstance = axiosService.getInstance();



export const getCategories = () => {


    return (dispatch) => {

        dispatch(asyncActionStart())
        axiosInstance.get('/products/categories')
            .then((response) => {
                console.log(response.data.categories);

                dispatch({

                    type: GET_CATEGORIES,
                    payload: response.data.categories

                })


                dispatch(asyncActionFinish())


            })

            .catch((err) => {

                console.log(err);


            })



    }

}

export const sendImage = () => {

}

export const deleteImage = () => {

}

export const deleteCategory = (categoryId) => {


    return (dispatch) => {

        axiosInstance.post(`/products/categories/delete/${categoryId}`)
            .then((response) => {


                window.location.reload()
                toastr.success('Deleted', 'Category deleted')
            })

            .catch((err) => {



            })


    }


}



export const addCategory = (dataToSubmit) => {


    return async (dispatch) => {

        try {


            const response = await axiosInstance.post('/products/category', dataToSubmit)

            dispatch(asyncActionStart())
            if (response) {


                if (response.data.success) {

                    toastr.success('Category added', 'successfully added category')
                    dispatch(asyncActionFinish())
                    window.location.reload()

                } else {

                    dispatch({
                        type: GET_ERRORS,
                        payload: response.data.message
                    })
                    toastr.error('Category Error', 'errors in added category')
                    dispatch(asyncActionFinish())
                }




            }


        } catch (error) {




        }




    }



}
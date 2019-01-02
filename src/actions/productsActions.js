import { GET_ERRORS, GET_CATEGORIES, UPLOAD_IMAGES, DELETE_IMAGE, CLEAR_IMAGES, GET_PRODUCTS, GET_PRODUCT_EDIT } from './types';
import axios from 'axios'
import { asyncActionStart, asyncActionFinish } from './asyncActions'
import axiosService from '../services/axiosService'
import authService from '../services/authService'
import { isEmpty } from '../utils/isEmpty'
import { endpoint, prodEndpoint } from '../config'
import { toastr } from 'react-redux-toastr'
import { reset } from 'redux-form'
import { push } from 'connected-react-router'
const URL = process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint
const axiosInstance = axiosService.getInstance();





export const deleteProduct = (productId) => {


    return (dispatch) => {

        dispatch(asyncActionStart())

        axiosInstance.post(`/products/delete/${productId}`)
            .then((response) => {

                toastr.success('DELETE PRODUCT', 'successfully deleted!!')
                dispatch(getProductsToTable())
                dispatch(asyncActionFinish())

            })

            .catch((err) => {
                console.log(err)
            })

    }

}

export const getProductsToTable = () => {



    return (dispatch) => {
        dispatch(asyncActionStart())
        axiosInstance.get(`/products/all`)
            .then((response) => {

                dispatch({
                    type: GET_PRODUCTS,
                    payload: response.data.products
                })

                dispatch(asyncActionFinish())


            })
            .catch((err) => {
                console.log(err)
            })



    }



}






export const getCategories = () => {


    return (dispatch) => {

        dispatch(asyncActionStart())
        axiosInstance.get('/products/categories')
            .then((response) => {


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

export const sendImage = (image) => {


    return (dispatch) => {

        const formData = new FormData()
        formData.append('file', image)
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        toastr.success('image uploading', 'wait a sec')
        axiosInstance.post(`/products/upload`, formData, config)
            .then((response) => {

                if (response.data.success) {

                    console.log(response.data)
                    dispatch({
                        type: UPLOAD_IMAGES,
                        payload: { public_id: response.data.public_id, url: response.data.url }
                    })


                } else {




                }

            })

            .catch((err) => {
                console.log(err)
            })
    }



}



export const deleteImage = (imageId) => {



    return (dispatch) => {

        axiosInstance.post(`/products/upload/${imageId}`)
            .then((response) => {


                dispatch({
                    type: DELETE_IMAGE,
                    payload: imageId
                })

                toastr.success('Image Delete', 'delete image successfully')

            })

            .catch((err) => {
                console.log(err);
            })



    }


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

                    dispatch(asyncActionFinish())
                    toastr.error('Category Error', 'errors in added category')
                }




            }


        } catch (error) {




        }




    }



}


export const addProduct = (dataToSubmit) => {




    return (dispatch) => {
        console.log(dataToSubmit)
        dispatch(asyncActionStart())

        axiosInstance.post(`/products/product`, dataToSubmit)
            .then((response) => {


                if (response.data.success) {

                    dispatch(reset())
                    toastr.success('product added', 'a product is added successsfully')
                    dispatch(
                        {
                            type: CLEAR_IMAGES
                        }
                    )
                    dispatch(asyncActionFinish())



                } else {

                    dispatch({
                        type: GET_ERRORS,
                        payload: response.data.message
                    })
                    dispatch(asyncActionFinish())



                }


            })

    }




}



export const getProductToEdit = (product) => {

    return (dispatch) => {

        dispatch({
            type: GET_PRODUCT_EDIT,
            payload: product
        })
        dispatch(push('/admin/products/add'))


    }



}




export const editProduct = (productId, dataToEdit) => {


    return (dispatch) => {





    }



}
import { GET_CATEGORIES, DELETE_CATEGORY, UPLOAD_IMAGES, DELETE_IMAGE, CLEAR_IMAGES, GET_PRODUCTS } from '../actions/types'

const initialState = {
    uploadedImages: [],
    productToEdit: null
}



export default (state = initialState, action) => {


    switch (action.type) {

        case GET_CATEGORIES:
            return { ...state, categories: action.payload }
        case GET_PRODUCTS:
            return { ...state, productsTable: action.payload }
        case DELETE_CATEGORY:
            return { ...state }
        case UPLOAD_IMAGES:
            return { ...state, uploadedImages: [...state.uploadedImages, action.payload] }
        case DELETE_IMAGE:

            let updatedImages = state.uploadedImages.filter((image) => {
                return image.public_id !== action.payload;
            })
            return { ...state, uploadedImages: updatedImages }
        case CLEAR_IMAGES:
            return { ...state, uploadedImages: [] }

        default:
            return state
    }
}

import { GET_CATEGORIES, DELETE_CATEGORY, UPLOAD_IMAGES } from '../actions/types'

const initialState = {
    uploadedImages: []
}



export default (state = initialState, action) => {


    switch (action.type) {

        case GET_CATEGORIES:
            return { ...state, categories: action.payload }
        case DELETE_CATEGORY:
            return { ...state }
        case UPLOAD_IMAGES:
            return { ...state, uploadedImages: [...state.uploadedImages, action.payload] }

        default:
            return state
    }
}

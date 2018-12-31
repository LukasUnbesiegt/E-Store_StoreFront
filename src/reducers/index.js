import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr'


import userReducer from './userReducer'
import asyncReducer from './asyncReducer';
import productsReducer from './productsReducer';
import errorsReducer from './errorsReducer'

import modalReducer from '../components/misc/modalManager/modalReducer'



export const reducers = combineReducers({
        form: formReducer,
        user: userReducer,
        toastr: toastrReducer,
        async: asyncReducer,
        modal: modalReducer,
        products: productsReducer,
        erorrs: errorsReducer


})
import {createStore , applyMiddleware } from 'redux'
import {reducers} from './reducers/index'
import Thunk from 'redux-thunk'
import Promise from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension'

export const configureStore = (preloadedState) => {
    const middlewares = [Thunk , Promise];
    const middlewareEnhancer = applyMiddleware(...middlewares);
  
    const storeEnhancers = [middlewareEnhancer];
  
    const composedEnhancer  = composeWithDevTools(
      ...storeEnhancers 
      
      );
  
    const store = createStore(
      reducers,
      preloadedState,
      composedEnhancer
    )
  
    
  
    return store;
  }
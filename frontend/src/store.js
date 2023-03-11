// import data from './data.js'
import {legacy_createStore as createStore,compose,applyMiddleware, combineReducers} from 'redux'
// import configureStore from 'reduxjs/toolkit'
import thunk from 'redux-thunk'
import { productDetailsReducer, productReducer } from './reducers/productReducer.js'


const initialState={}

const reducer=combineReducers({
    productList:productReducer,
    productDetails:productDetailsReducer
})

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))

export default store
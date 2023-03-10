import data from './data.js'
import {legacy_createStore as createStore,compose,applyMiddleware} from 'redux'
// import configureStore from 'reduxjs/toolkit'
import thunk from 'redux-thunk'


const initialState={}

const reducer=(state,action)=>{
    return {
        products:data.products
    }
}

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))

export default store
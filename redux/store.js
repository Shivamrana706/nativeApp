import { createStore, applyMiddleware, combineReducers } from 'redux';

import { configureStore, MiddlewareArray, PreloadedState } from '@reduxjs/toolkit';

import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { Reducer } from './reducers/reducers';

const reducer = combineReducers({
    reducerAPI: Reducer

})

const Store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default Store;
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { counterSlice, endLocationSlice } from './reducer'
export default configureStore({
reducer: combineReducers(counterSlice, endLocationSlice) ,
})
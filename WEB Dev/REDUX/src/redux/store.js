import { configureStore } from '@reduxjs/toolkit'
import countReducer from './count/countSlice'


export const store = configureStore({
    reducer: {
        count: countReducer,
    },
})



// https://stackoverflow.com/questions/54385323/what-is-a-difference-between-action-reducer-and-store-in-redux



// Store An Object that holds the applications state data

//Reducer A function that returns some state data.Is triggered by an action type

//Action An object that tells the reducer how to change the state.It must contain a type property.It can optionally contain a payload property
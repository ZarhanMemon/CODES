import { configureStore } from '@reduxjs/toolkit'

import cartReducer from '../redux/cart/cartSlice'

import box1Slice from './boxes/box1Slice'
import box2Slice from './boxes/box2Slice'
import box3Slice from './boxes/box3Slice'



export const store = configureStore({
    reducer: {
        cart: cartReducer,
        box1: box1Slice,
        box2: box2Slice,
        box3: box3Slice,

    },
})
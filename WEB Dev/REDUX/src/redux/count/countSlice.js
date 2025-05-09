import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },

        decrement: (state) => {
            state.value -= 1
        },

        multiply: (state) => {
            state.value *= 2
        },
        restart: (state) => {
            state.value *= 0
        },

        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, multiply ,restart } = countSlice.actions

export default countSlice.reducer
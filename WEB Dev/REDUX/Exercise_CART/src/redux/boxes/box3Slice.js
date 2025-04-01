import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:0,
}

export const box3Slice = createSlice({
    name: 'box3',
    initialState,
    reducers: {
        incrementb3 : (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrementb3: (state) => {
            state.value -= 1
        },
       
    },
})

// Action creators are generated for each case reducer function
export const { incrementb3 , decrementb3   } = box3Slice.actions

export default box3Slice.reducer
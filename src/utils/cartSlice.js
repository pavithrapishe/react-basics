import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            console.log(action.payload)
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items.length = 0
            // state.items = [] // this wont work because we are just adding a reference to it. and not mutating it.
            // its not the same state as original its a different state. Its a local copy thats being modified.
            // here if you console log it gives a proxy object. It doesnt give the actual value. To console log you have to do
            // current(state) import current from reduxjs/toolkit

            // here you have a either mutate the exisint state or return a new state
            // you can either do state.items.length = 0 or return {items: []} whatever you return will replace the original state value
        },
    },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer

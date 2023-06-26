import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: {name: 'kim', age:20 },
    reducers : {
        changeName(state) {
            state.name = 'park'
        },
        increaseNumber(state, action){
            state.age +=action.payload
        }
    }
})

export let { changeName, increaseNumber } = user.actions

export default user;
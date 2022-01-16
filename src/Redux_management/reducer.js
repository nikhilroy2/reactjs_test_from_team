import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: ''
    },
    reducers: {
        increment: state=> {
            state.value+=1
        },
        decrement: state=> {
            state.value-=1
        },
        incrementByAmount: (state, action)=> {
            state.value+=action.payload
        },
        startLocation:(state,action)=> {
            console.log(state, action)
            state.value=action.payload
        }
    }
})


// for list redux
export const listSlice = createSlice({
    name: 'list',
    initialState: {
        value: []
    },
    reducers: {
        listIncreased : (state,action)=> {
            state.value+=action.payload
        }
    }
})



export const endLocationSlice = createSlice({
    name: 'counter',
    initialState: {
        value: '0'
    },
    reducers: {
        endLocation:(state,action)=> {
            console.log(state, action)
            state.value=action.payload
        }
    }
})




export const {increment,decrement,incrementByAmount, startLocation} = counterSlice.actions
export const {listIncreased} = listSlice.actions
export const {endLocation} = endLocationSlice.actions;

export default counterSlice.reducer
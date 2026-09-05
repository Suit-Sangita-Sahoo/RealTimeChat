import { createSlice } from "@reduxjs/toolkit"

const initialstate={
    count:0
}
const counterslice=createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{return{count:state.count+1}},
        decrement:(state)=>{return{count:state.count-1}},
          reset:(state)=>{return{count:0}},
    }
})
export const {increment,decrement,reset}=counterslice.actions
export default counterslice.reducer
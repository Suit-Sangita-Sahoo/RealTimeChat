import { configureStore } from "@reduxjs/toolkit";

import { counterReduce } from "../features/counterSlice";
export const store=configureStore({
    reducer:{
        counter:counterReduce
    }
})
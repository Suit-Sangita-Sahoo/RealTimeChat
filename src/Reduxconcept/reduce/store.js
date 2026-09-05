import { createStore } from "redux";
import { counterReduce } from "./reducers";

export const store=createStore(counterReduce)

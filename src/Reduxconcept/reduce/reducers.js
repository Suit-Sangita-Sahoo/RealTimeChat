let initialState={count:0}
 export const counterReduce=(state=initialState,action)=>{
    switch (action.type) {
        case "increment":
            return {count:state.count+1}
            
        case "decrement":
            return {count:state.count-1}
        case "reset":
            return {count:0}        
    
        default:
            return state
    }

}
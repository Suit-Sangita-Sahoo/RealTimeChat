import React, { useReducer, useState } from 'react'

const UseReduceHook = () => {
    // const [count,setCount]=useState(0)

    let initialstate={count:0}
    const reduce=(state,action)=>{
        switch(action){
            case "increment":
                return {count:state.count+1}
            case "decrement":
                return {count:state.count-1}
            case "reset":
                return {count:state.count=0}   
                
            default:
                return state    
        }
    }
    const [state,dispatch]=useReducer(reduce,initialstate)
    console.log("hello")
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch("increment")} className='w-[100px] h-[30px] bg-blue-400'>Increment</button>
         <button onClick={()=>dispatch("decrement")}  className='w-[100px] h-[30px] bg-blue-400'  >Decrement</button>
          <button onClick={()=>dispatch("reset")} className='w-[100px] h-[30px] bg-blue-400' >Reset</button>  
    </div>
  )
}

export default UseReduceHook

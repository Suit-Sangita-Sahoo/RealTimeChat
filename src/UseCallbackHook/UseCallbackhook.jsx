import { useCallback, useState } from "react"
import Child from "../UseMemo/Child"

const UseCallbackhook=()=>{
    const [count,setCount]=useState(0)
    const [val,setVal]=useState(10)
    console.log("parent component")
    const demo=useCallback(()=>{
        console.log("demo function")
        // return  21;
    },[val])
    return(
        <div>
            <h1>{count}</h1>
            <h1>{val}</h1>
            <button onClick={()=>setCount(count+1)}>Update Count </button>
            <button onClick={()=>setVal(val+10)}>Update Value</button>
            <Child demo={demo}></Child>

        </div>
    )
}
export default UseCallbackhook

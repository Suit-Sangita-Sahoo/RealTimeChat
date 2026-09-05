import { useRef, useState } from "react"

const Problem1=()=>{
    const [val,setVal]=useState(0)
    const [count,setCount]=useState(val)
    const update=()=>{
        setVal(val+1)
    }
    return(
        <div>
            <h1>{val}</h1>
            <h1>{count}</h1>
            <button onClick={update}>Update</button>
        </div>
    )
}

export default Problem1
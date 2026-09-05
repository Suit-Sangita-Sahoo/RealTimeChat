import { useEffect, useState } from "react"

const UseEffect=()=>{
    const [count,setCount]=useState(0)
    const [val,setVal]=useState(10)
    const [data,setData]=useState(100)
    useEffect(()=>{
        setCount(count+1)
    },[data])
    return(
        <div>
            <h1>{count}</h1>
            <h2>{val}</h2>
            <h3>{data}</h3>
            <button onClick={()=>{setVal(val+10)}}>Update Value</button>
            <button onClick={()=>{setData(data+100)}}>Update data</button>
        </div>

    )
}
export default UseEffect
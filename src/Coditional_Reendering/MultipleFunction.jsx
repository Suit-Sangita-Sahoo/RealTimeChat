import { useState } from "react"

const Multiplefunction=()=>{
    const [count,setCount]=useState(0)

    const demo=()=>{
        setCount((prevstate)=>prevstate+1)
         setCount((prevstate)=>prevstate+1)
          setCount((prevstate)=>prevstate+1)
           setCount((prevstate)=>prevstate+1)
    }
    return(
            <div>
                <h1>child{count}</h1>
                    <button onClick={demo}></button>
               
            </div>
    )
}
export default Multiplefunction
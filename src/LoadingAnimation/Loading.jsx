import { useState } from "react"
import { Atom } from "react-loading-indicators"

const Loading=()=>{
    const [data,setData]=useState([])
    const [status,setStatus]=useState(false)
    const fetchdata=async()=>{
        setStatus(true)
    }
    return(
        <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Atom color="#9b3313ff" size="large" text="Loading" textColor="black" />
        </div>
    )
}
export default Loading
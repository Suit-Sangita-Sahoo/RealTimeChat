import { useRef } from "react"

const Count=()=>{
    const countref=useRef(0)
    const updateref=()=>{
        countref.current=countref.current+1
        console.log("Clicked",countref.current)
    };
    return(
        <div>
            <h1>{countref.current}</h1>
            <button onClick={updateref}>Click</button>
        </div>
    )
};
export default Count
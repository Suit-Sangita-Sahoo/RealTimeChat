import React, { createContext } from "react";
import Child1 from "./Child1"
import Uncle from "./Uncle";

export const GlobalContext=createContext()
const Parent=()=>{
    const data=["Sweet","Sangita","Sahoo"]
    return(
     <div>
       <GlobalContext value={data}>
           <Child1/>
           <Uncle/>
       </GlobalContext>
     </div>
    )
}
export default Parent;
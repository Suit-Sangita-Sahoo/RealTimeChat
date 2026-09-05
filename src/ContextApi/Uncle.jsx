import { useContext } from "react"
import { GlobalContext } from "./Parent"

const Uncle=()=>{
    const data=useContext(GlobalContext)
    // console.log(data)
    return(
        <div>
            Uncle
            
        </div>
    )
}
export default Uncle
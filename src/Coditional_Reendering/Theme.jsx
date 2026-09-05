import { useState } from "react"
import "./Theme.css"
const Theme=()=>{
    const[theme,setTheme]=useState(false)
    const changeTheme=()=>{
        setTheme(!theme)
    }

    return(
        <div style={{width:"100%",height:"100vh"}} className={theme?"dark":"light"}>
            <button onClick={changeTheme}>Theme</button>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos enim esse distinctio cum voluptatibus minus mollitia beatae sapiente corporis, similique ab culpa rem consectetur quasi facere ipsam. Illum, quibusdam?</p>

        </div>
    )
}
export default Theme
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Help from "./Help"
import Contact from "./Contact"
import Layout from "./Layout"

const Routing=()=>{
    const paths=createBrowserRouter([
        {
            
            path:"/",
            element:<Layout/>,
            children:[
                {path:"/",
            element:<Home/>
        },
        {path:"/about",
            element:<About/>
        },
        {path:"/help",
            element:<Help/>
        },
        {path:"/contact",
            element:<Contact/>
        }
            ]
        },
        
    ])
    return(
        <RouterProvider router={paths}/>
    )
}
export default Routing
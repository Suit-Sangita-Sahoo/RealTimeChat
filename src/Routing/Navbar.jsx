import { Link } from "react-router-dom"
import "./Routing.css"
const Navbar=()=>{
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/help">Help</Link></li>
                </ul>
                
            </nav>
        </div>
    )
}
export default Navbar
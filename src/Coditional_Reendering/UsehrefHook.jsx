import { useRef } from "react"

const UsehrefHook=()=>{
    const h1ref=useRef(null)
    const h2ref=useRef(false)
    console.log(h1ref)
    const updateref=()=>{
        if(!h2ref.current)
        {
  
       h1ref.current.style.backgroundColor = "black";

        h1ref.current.style.color = "white";
        h2ref.current = true;
      }
       else {
        h1ref.current.style.backgroundColor = "white";
        h1ref.current.style.color = "black";
        h2ref.current = false;
      }
    
    };
    
    return( 
            <div ref={h1ref} style={{width:"100%",height:"100vh"}} id={h1ref?"dark":"light"}>
        
            {/* <h1 ref={h1ref}>hello</h1> */}
            <p  id="para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur et eum modi eaque incidunt nulla omnis quod. Sunt, nihil ipsam incidunt omnis officiis officia vero quia saepe beatae sit consequuntur?</p>
            <button onClick={updateref}>Click</button>
        </div>
    )
}
export default UsehrefHook
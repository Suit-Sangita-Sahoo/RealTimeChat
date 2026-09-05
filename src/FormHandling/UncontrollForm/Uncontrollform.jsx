import { useRef } from "react";

const Uncontrollform=()=>{
    const input1=useRef()
    const handlesubmit=(e)=>{
        e.preventDefault();//To stop the reloading of page
        console.log(input1.current.name);//to get the value of name input field
        console.log(input1.current.value);// to get the value of value input field
        input1.current.value=" ";//to clear the input field after submiting
    }
    return(
        <div>
            <form onSubmit={ handlesubmit}>
           <input type="text" name="username" placeholder="Enter your Name" ref={input1} /><br/>
           <button>Submit</button>
           </form>
        </div>
    )
}
export default Uncontrollform
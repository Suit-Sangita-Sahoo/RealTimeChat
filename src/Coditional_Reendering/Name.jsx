const Name=()=>{
    let name="suit";
   const h1=document.getElementById("demo")
   console.log(h1)
   const update=()=>{
    h1.innerText("Suit")
   }
    return(
        <div>
            <h1 id="demo">Sweet</h1>
           <button onClick={update}>Click</button>
        </div>

    )
}
export default Name
// import { useMemo, useState } from "react"
// import Child from "./Child"
// import Demo from "./Demo"

// const ReactMemo=()=>{
//     const [count,setCount]=useState(0)
//     const c_name="sundari"
//     const demo=useMemo(()=>{console.log("parent component")
//         return "Demo called from Parent, count = " ;
//     },[count])
//     return(
//         <div>
//           {demofreeee}
//             <h1>{count}</h1>
//             <button onClick={()=>setCount(count+1)}>Update</button>
//             <Child name="child component"/>
//             <Demo />

//         </div>
//     )
// }
// export default ReactMemo

import { useCallback, useState } from "react";
import Child from "./Child";
import Demo from "./Demo";

const ReactMemo = () => {
  const [count, setCount] = useState(0);

  const demo = useCallback(() => {
    console.log("parent component");
    return "Demo called from Parent, count = " + count;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Update</button>
      <Child name="child component" />
      <Demo name={demo()} /> {/* calling the memoized function */}
    </div>
  );
};

export default ReactMemo;

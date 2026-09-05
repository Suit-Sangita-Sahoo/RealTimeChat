import { useState, useMemo } from "react";
const Useremo = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(0);
  const slowfunction = (num) => {
    let total = 0;
    for (let i = 1; i < 10000000; i++) {
      total += num;
    }
    return total;
  };
  const data = useMemo(() => {
    return slowfunction(val);
  }, [val]);
  console.log(data);
  const handleInput = (e) => {
    setVal(Number(e.target.value));
  };
  
  return (
    <div>
      <h1>{val}</h1>
      <h1>{count} this is count</h1>
      <h1>{data} this is the output</h1>
      <input type="number" value={val} onChange={handleInput} />
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
};

export default Useremo;

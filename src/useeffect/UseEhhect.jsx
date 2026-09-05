import { useEffect, useState } from "react";
import "./UseEffect.css";
import axios from "axios";

const UseEffectExample = () => {
  const [data, setData] = useState([]);
  const [deletes, setDelete] = useState(null);

  const fetchdata = async () => {
    const output = await  axios.get("https://fakestoreapi.com/products");
    setData(output);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    if (deletes !== null) {
      setData((prevData) => prevData.filter((item) => item.id !== deletes));
      setDelete(null); 
    }
  }, [deletes]);

  return (
    <div className="useeffect">
      {data?.map((ele) => (
        <div className="product-card" key={ele.id}>
          <img src={ele.image} alt={ele.title} className="product-image" />
          <h2>{ele.title}</h2>
          <p className="price">${ele.price}</p>
          <p className="rating">⭐ {ele.rating.rate}</p>
          <div className="btn-data">
            <button style={{ backgroundColor: "blue" }}>Fetch</button>
            <button
              onClick={() => setDelete(ele.id)} 
              style={{ backgroundColor: "red" }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UseEffectExample;

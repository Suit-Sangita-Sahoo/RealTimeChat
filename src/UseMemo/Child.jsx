import React from "react";

const Child = ({ name }) => {
  console.log("child component");
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default React.memo(Child);
//export default Child

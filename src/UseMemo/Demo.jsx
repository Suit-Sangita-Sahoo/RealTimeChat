import React from "react";

const Demo = ({ name }) => {
  console.log("demo component");
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default React.memo(Demo);

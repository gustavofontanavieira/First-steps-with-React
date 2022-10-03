import "../App.css";
import React from "react";

const Count = (prop) => {
  return (
    <div className="counter">
      <h1>{prop.number}</h1>
    </div>
  );
};

export default Count;

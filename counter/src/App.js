import "./App.css";
import React from "react";
import Count from "./component/Count";

function App() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((oldValue) => oldValue + 1);
  }

  function less() {
    setCount((oldValue) => oldValue - 1);
  }

  return (
    <div className="main">
      <Count number={count} />
      <div className="buttons">
        <button className="btn" onClick={less}>
          -
        </button>
        <button className="btn" onClick={add}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;

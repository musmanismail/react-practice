import React from "react";
import { useState } from "react";
const sum_fun = (a, b) => {
  const result = a + b;
  return result;
};

const Sum = () => {
  const [count, setCount] = useState(0);

  const handleReset = () => {
    setCount(0);
  };
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrease = () => {
    setTimeout(() => {
      setCount((prev) => {
        return prev + 1;
      });
    }, 4000);
  };

  return (
    <>
      <div className="container">
        <div style={{ margin: "10%" }}>
          <h1 style={{ color: "red" }}>{count}</h1>
          <button onClick={handleIncrease} className="btn btn-primary">
            Click to increament {sum_fun(100, 1000)}
          </button>
          <button className="btn btn-danger" onClick={handleDecrease}>
            Click to decrement
          </button>
          <button className="btn btn-warning" onClick={handleReset}>
            Click to reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Sum;

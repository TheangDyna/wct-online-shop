import React from "react";

const TestButton = () => {
  return (
    <button
      className="btn"
      onClick={() => alert("I am Test Button")}
    >
      Button
    </button>
  );
};

export default TestButton;

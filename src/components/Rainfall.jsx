import React from "react";
import "./Rainfall.css";

const Rainfall = () => {
  const raindrops = Array.from({ length: 100 });

  return (
    <div className="rainfall">
      {raindrops.map((_, index) => (
        <div key={index} className="raindrop"></div>
      ))}
    </div>
  );
};

export default Rainfall;
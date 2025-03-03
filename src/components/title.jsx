import React from "react";
import "./title.css";

function Title({ title1, title2 }) {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-start items-start lg:items-center">
      <h1 className="flex-none w-auto text-6xl md:text-8xl font-bold animate-gradient lg:mr-4 pb-2">
        {title1}
      </h1>
      <h1 className="flex-none w-auto text-6xl md:text-8xl font-bold animate-gradient-reverse pb-2">
        {title2}
      </h1>
    </div>
  );
}

export default Title;

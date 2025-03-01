import React from "react";

function Title({ title1, title2 }) {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-start items-start lg:items-center">
      <h1 className="flex-none w-auto text-6xl md:text-8xl font-bold color-title1 lg:mr-4">
        {title1}
      </h1>
      <h1 className="flex-none w-auto text-6xl md:text-8xl font-bold color-title2">
        {title2}
      </h1>
    </div>
  );
}

export default Title;

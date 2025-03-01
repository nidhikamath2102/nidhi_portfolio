import React from "react";
import Title from "../components/title";
import { timelineItems } from "../data/data";

function Timeline() {
  return (
    <div className="w-full flex flex-col justify-center items-start p-6">
      <Title title1={"My"} title2={"Timeline"} />
      <div className="mt-8 relative w-full md:w-full lg:w-full">
        <div className="absolute top-0 left-6 h-full w-0.5 bg-gray-200"></div>
        {timelineItems.map((item, index) => (
          <div key={index} className="flex items-start mb-8 relative w-full">
            <div className="flex-shrink-0">
              <div className="relative w-12 h-12 rounded-full bg-white border-2 border-gray-300 overflow-hidden">
                <img
                  src={item.logo}
                  alt={`${item.companyName} logo`}
                  className="w-full h-full object-scale-down"
                />
              </div>
            </div>
            <div className="ml-8 flex-1">
              <div className="flex items-center justify-between flex-nowrap">
                <h3 className="font-bold text-lg text-white flex whitespace-pre-line">{item.companyName}</h3>
                <span className="mt-2 md:mt-0 px-4 py-1 bg-gray-100 border border-gray-300 rounded-full text-sm text-xs mr-15">
                  {item.employmentType}
                </span>
              </div>
              <div className="text-gray-500 text-sm mt-1 italic">
                {item.year}
              </div>
              <div className="text-gray-500 text-sm mt-1 italic">
                {item.role}
              </div>
              <p className="mt-2 text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
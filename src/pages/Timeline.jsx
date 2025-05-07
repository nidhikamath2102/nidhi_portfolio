import React, { useState } from "react";
import Title from "../components/title";
import { timelineItems } from "../data/data";
import { Dialog } from "@headlessui/react";

function Timeline() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDialog = () => setIsOpen(true);
  const handleCloseDialog = () => setIsOpen(false);

  const industryItems = timelineItems.filter(
    (item) => item.category === "industry" || item.category === "education"
  );
  const campusItems = timelineItems.filter((item) => item.category === "campus");

  const renderItem = (item, index) => {
    const isVT = item.companyName.toLowerCase().includes("virginia tech");

    return (
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
            <h3 className="font-bold text-lg text-white flex whitespace-pre-line">
              {item.companyName}
            </h3>
            <span className="mt-2 md:mt-0 px-4 py-1 text-gray-400 border custom-border-color rounded-full text-sm text-xs whitespace-nowrap">
              {item.employmentType}
            </span>
          </div>
          <div className="text-gray-500 text-sm mt-1 italic">{item.year}</div>
          <div className="text-blue-400 text-sm mt-1 italic font-semibold">{item.role}</div>
          {Array.isArray(item.description) ? (
            <ul className="list-disc ml-5 mt-2 text-gray-400 text-sm space-y-2">
              {item.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-gray-400 timeline-line-height">{item.description}</p>
          )}

          {isVT && (
            <button
              onClick={handleOpenDialog}
              className="mt-3 text-sm text-yellow-200 hover:underline focus:outline-none"
            >
              View on-campus experience
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col justify-center items-start p-6">
      <Title title1={"Education"} title2={"and Experience"} />
      <div className="mt-8 relative w-full md:w-full lg:w-full">
        <div className="absolute top-0 left-6 h-full w-0.5 bg-gray-200"></div>
        {industryItems.map((item, index) => renderItem(item, index))}
      </div>

      <Dialog open={isOpen} onClose={handleCloseDialog} className="relative z-50">
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="max-w-md w-full rounded-xl bg-black p-6 shadow-xl border border-gray-600">
            <h2 className="text-lg font-bold text-white mb-4">On-Campus Experience</h2>

            {campusItems.map((item, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-white font-semibold">{item.role}</h4>
                <div className="text-gray-400 text-sm italic">
                  {item.companyName} • {item.year}
                </div>
                <p className="text-gray-400 text-sm mt-1">{item.description}</p>
              </div>
            ))}

            <button
              onClick={handleCloseDialog}
              className="mt-4 text-blue-400 text-sm hover:underline"
            >
              Close
            </button>
          </div>
        </div>
    </Dialog>

    </div>
  );
}

export default Timeline;
import React from "react";
import Title from "../components/title";
import { projects } from "../data/data";

function Projects() {
  return (
    <div className="w-full flex flex-col justify-center items-start p-6">
      <Title title1={"My"} title2={"Projects"} />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-36 object-cover"
            />
            <div className="absolute top-2 right-2 bg-white rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">{project.title}</h3>
              <p className="text-gray-700 mb-2 text-sm">{project.description}</p>
              <div className="flex flex-wrap mb-2">
                {project.skills.split(', ').map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`text-gray-800 text-xs font-semibold mr-1 mb-1 px-2 py-0.5 rounded ${getColorClass(skillIndex)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
              >
                <span className="sr-only">View Project</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getColorClass(index) {
  const colors = [
    'bg-red-200',
    'bg-green-200',
    'bg-blue-200',
    'bg-yellow-200',
    'bg-purple-200',
    'bg-pink-200',
    'bg-indigo-200',
    'bg-teal-200',
  ];
  return colors[index % colors.length];
}

export default Projects;
import React from "react";
import Title from "../components/title";
import { projects } from "../data/data";
import link from "../assets/link.png"; 

function Projects() {
  return (
    <div className="w-full flex flex-col justify-center items-start p-6">
      <Title title1={"My"} title2={"Projects"} />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-color-app border border-[#6c757d] rounded-lg shadow-md overflow-hidden relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg text-white ">{project.title}</h3>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <img src={link} alt="Link" className="w-6 h-6" />
                </a>
              </div>
              <div className="flex flex-wrap mb-2">
                {project.skills.split(', ').map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`text-gray-800 text-xs font-semibold mr-1 mb-2 px-2 py-0.5 rounded ${getColorClass(skillIndex)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <hr className="border-[#6c757d] my-2" />
              <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
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
    'bg-[#cdcdcd]',
    'bg-[#a0f9a0]',
    'bg-[#92c6f9]',
    'bg-[#FFFFB3]',
    'bg-[#bb9adb]',
    'bg-[#f499c6]',
    'bg-[#a37f7f]',
    'bg-[#c78b54]',
  ];
  return colors[index % colors.length];
}

export default Projects;
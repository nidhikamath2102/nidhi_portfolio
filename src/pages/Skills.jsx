import React from "react";
import Title from "../components/title";
import { skills } from "../data/data";

function Skills() {
  return (
    <div className="w-full flex flex-col justify-center items-start p-6">
      <Title title1={"My"} title2={"Skills"} />
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 mt-8">
        {skills.map((skill, index) => (
          <div key={index} className="relative w-32 h-32 flex flex-col justify-center items-center bg-gray-900 rounded-lg shadow-lg">
            <div className="absolute inset-0 border-4 border-transparent rounded-lg animate-snake" style={{ borderColor: skill.color }}></div>
            <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
            <p className="mt-2 text-sm font-semibold text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
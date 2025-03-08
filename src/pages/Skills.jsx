import React from "react";
import Title from "../components/title";
import { skills } from "../data/data";

function Skills() {
  return (
    <div className="w-full flex flex-col justify-center items-start p-6">
      <Title title1={"My"} title2={"Skills"} />
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10 gap-4 mt-8">
        {skills.map((skill, index) => (
          <div key={index} className="relative w-24 h-24 flex flex-col justify-center items-center bg-[#111111] rounded-lg shadow-lg">
            <div className="absolute inset-0 border-4 border-transparent rounded-lg" style={{ borderColor: skill.color }}></div>
            <img src={skill.logo} alt={skill.name} className="w-10 h-10" />
            <p className="mt-2 text-xs font-semibold text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
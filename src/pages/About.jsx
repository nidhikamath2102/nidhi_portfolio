import React from "react";
import { boxItems } from "../data/data";
import Title from "../components/title";

function About() {
  return (
    <div className="w-full flex flex-col justify-center items-center
     p-6">
      <Title title1={"Software"} title2={"Engineer"} />

      <p className="color-paragraph mt-4">
      I’m a dedicated software developer with a strong foundation in computer engineering and hands-on experience across mobile and web platforms. Currently pursuing my Master's in Computer Science & Applications at Virginia Tech, I’ve honed my skills through roles that emphasized innovative problem-solving—from refining real-time functionalities in mobile apps to leading teams in enhancing user experiences. I take pride in turning complex challenges into efficient, reliable solutions and continuously exploring new technologies to drive impactful results.
      </p>

      <div className="flex flex-wrap justify-center mt-4 ">
        {boxItems.map((item, index) => (
          <div key={index} className="w-full md:w-1/2 p-2 flex justify-center">
            <div
              className="w-full md:w-full h-full flex items-center justify-center rounded-[15px] text-white text-center p-6"
              style={{ backgroundColor: item.color }}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
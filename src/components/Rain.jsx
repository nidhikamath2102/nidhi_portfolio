import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/data";

const Rain = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {skills.map((skill, i) => {
        const left = Math.random() * 100;           
        const duration = 9 + Math.random() * 4;     
        const delay = -Math.random() * 8;

        return (
          <motion.div
            key={i}
            className="absolute font-semibold text-sm whitespace-nowrap opacity-20"
            style={{
              top: "-20px",
              left: `${left}%`,
              color: skill.color,    
            }}
            animate={{ y: "110vh" }}
            transition={{
              duration,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              delay,
            }}
          >
            {skill.name}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Rain;
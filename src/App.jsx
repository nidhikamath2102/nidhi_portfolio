import React from "react";
import "./App.css";
import "./styles/colors.css";
import { navItems } from "./data/data";
import { navIcons } from "./data/data";
import profileImage from "./assets/nidhi.png";

import instagramIcon from "./assets/instagram.png";
import facebookIcon from "./assets/facebook.png";
import githubIcon from "./assets/github.png";
import discordIcon from "./assets/discord.png";
import linkedinIcon from "./assets/linkedin.png";

import About from "./pages/About";
import Timeline from "./pages/Timeline";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Designs from "./pages/Designs";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import resumeFile from "./assets/Nidhi_Kamath_Resume.pdf";

import Rain from "./components/Rain";

function App() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.setAttribute("download", "Nidhi_Kamath_Resume.pdf");
    link.download = "Nidhi_Kamath_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    // <div className="min-h-screen color-app flex flex-col items-center justify-center p-4 md:p-6 overflow-x-hidden">
    <div className="relative min-h-screen color-app flex flex-col items-center justify-start pt-24 p-4 md:p-6 overflow-x-hidden">
      <Rain dropCount={80} />
      <header className="fixed top-0 left-0 right-0 flex justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-10 p-6 z-10 bg-white shadow-md color-app">
        {/* {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-3 py-1 md:px-8 color-chip-background rounded-[20px] color-chip-header cursor-pointer color-hover transition">
            {item}
          </a>
        ))} */}
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            title={item}
            className="px-3 py-1 md:px-8 color-chip-background rounded-[20px] color-chip-header cursor-pointer color-hover transition flex items-center justify-center "
          >
            <span className="w-6 h-6 sm:hidden flex items-center justify-center">{navIcons[item]}</span>
            <span className="hidden sm:inline flex items-center justify-center">{item}</span>
          </a>
        ))}
      </header>

      <div className="flex flex-col w-full max-w-7xl mt-24">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-7xl font-bold text-gradient animate-fade-in text-center">Nidhi Kamath</h1>
          <img
            src={profileImage}
            alt="Nidhi Kamath"
           className="object-cover w-80 h-80 md:w-80 md:h-80 relative z-8 mt-8"
          />
          <div className="mt-5 inline-block p-5" onClick={handleDownload}>
            <button className="w-full px-20 py-3 bg-gradient-to-r from-[var(--color-resume-1)] to-[var(--color-resume-2)] text-white rounded-full animate-glow text-center hover:bg-gradient-to-r hover:from-[var(--color-resume-3)] hover:to-[var(--color-resume-3)] transition duration-300 ease-in-out">
              Resume
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col mt-10">
          <section id="about" className="w-full pt-16 -mt-16">
            <About />
          </section>
          <section id="experience" className="w-full mt-10 pt-16 -mt-16">
            <Timeline />
          </section>
          <section id="skills" className="w-full mt-10 pt-16 -mt-16">
            <Skills />
          </section>
          <section id="projects" className="w-full mt-10 pt-16 -mt-16">
            <Projects />
          </section>
          <section id="designs" className="w-full mt-10 pt-16 -mt-16">
            <Designs />
          </section>
          {/* <section id="certificates" className="w-full mt-10 pt-16 -mt-16">
            <Certificates />
          </section> */}
          <section id="contact" className="w-full mt-10 pt-16 -mt-16">
            <Contact />
          </section>
        </div>
      </div>

      <footer className="w-full text-center p-6 ">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p className="text-white">&copy; 2025 Nidhi Kamath. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/nidhikamath21/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="https://github.com/nidhikamath2102" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="w-8 h-8" />
          </a>
          <a href="https://discord.com/users/nidhi_kamath" target="_blank" rel="noopener noreferrer">
            <img src={discordIcon} alt="Discord" className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/nidhi__kamath/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
          </a>
          <a href="https://www.facebook.com/kamathnidhi21/" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
          </a>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
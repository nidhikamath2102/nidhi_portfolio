import React from "react";
import "./App.css";
import "./styles/colors.css";
import { navItems } from "./data/data";
import profileImage from "./assets/nidhi.png";
import About from "./pages/About";
import Timeline from "./pages/Timeline";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import resumeFile from "./assets/Nidhi_Kamath.pdf";

function App() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Nidhi_Kamath_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="min-h-screen color-app flex flex-col items-center justify-center p-4 md:p-10">
      <header className="fixed top-0 left-0 right-0 flex justify-center space-x-4 md:space-x-10 p-8 z-10 bg-white shadow-md color-app">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-4 py-1 md:px-10 color-chip-background rounded-[20px] color-chip-header cursor-pointer color-hover transition">
            {item}
          </a>
        ))}
      </header>

      <div className="flex flex-col w-full max-w-7xl mt-32">
        <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-white mt-4 animate-fade-in">Nidhi Kamath</h1>
          <img
            src={profileImage}
            alt="Nidhi Kamath"
            className="rounded-full object-cover w-80 h-80 md:w-80 md:h-80 relative z-10"
          />
          <div className="mt-12 inline-block p-5" onClick={handleDownload}>
            <button className="w-full px-20 py-3 bg-gradient-to-r from-[#2C1212] to-[#5F4E4E] text-white rounded-full animate-glow text-center hover:bg-gradient-to-r hover:from-[#5F4E4E] hover:to-[#2C1212] transition duration-300 ease-in-out">
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
          {/* <section id="certificates" className="w-full mt-10 pt-16 -mt-16">
            <Certificates />
          </section> */}
          <section id="contact" className="w-full mt-10 pt-16 -mt-16">
            <Contact />
          </section>
        </div>
      </div>

      <footer className="w-full text-center p-4">
        <p className="text-white">&copy; 2025 Nidhi Kamath. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
import vtlogo from "../assets/vt_logo.png";
import vticlogo from "../assets/vt_innovation_campus_logo.png";
import truein from "../assets/truein.png";
import densoft from "../assets/densoft.png";
import bharatividyapeeth from "../assets/bharatividyapeeth.png";
import byjus from "../assets/byjus.png";

import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import nodeLogo from "../assets/node.png";
import flutterLogo from "../assets/flutter.png";
import dartLogo from "../assets/dart.png";
import pythonLogo from "../assets/python.png";
import javaLogo from "../assets/java.png";
import tailwindLogo from "../assets/tailwind.png";
import androidStudioLogo from "../assets/android-studio.png";
import awsLogo from "../assets/aws.png";
import canvaLogo from "../assets/canva.png";
import cssLogo from "../assets/css.png";
import figmaLogo from "../assets/figma.png";
import firebaseLogo from "../assets/firebase.png";
import gitLogo from "../assets/git.png";
import googlecolabLogo from "../assets/google-colab.png";
import htmlLogo from "../assets/html.png";
import intellijLogo from "../assets/intellij-idea.png";
import kotlinLogo from "../assets/kotlin.png";
import mongodbLogo from "../assets/mongodb.png";
import mysqlLogo from "../assets/mysql.png";
import nextjsLogo from "../assets/nextjs.png";
import notionLogo from "../assets/notion.png";
import pycharmLogo from "../assets/pycharm.png";
import vscodeLogo from "../assets/vscode.png";
import xcodeLogo from "../assets/xcode.png";

import askHokie from "../assets/ask_hokie.jpg";
import bookStoreWebApp from "../assets/bookstore_web_app.png";
import lifexai from "../assets/lifexai.png"
import upassmanager from "../assets/upassmanager.png"
import placeHolder from "../assets/placeholder.gif";

import { FaUser, FaBriefcase, FaTools, FaLaptopCode, FaPalette, FaEnvelope } from 'react-icons/fa';

export const navItems = ["About", "Experience", "Skills", "Projects", "Designs", "Contact"];

export const navIcons = {
  About: <FaUser />,
  Experience: <FaBriefcase />,
  Skills: <FaTools />,
  Projects: <FaLaptopCode />,
  Designs: <FaPalette />,
  Contact: <FaEnvelope />,
};


export const boxItems = [
  { color: "#2A9FA1", text: "Flutter App Developer" },
  { color: "#d7a578", text: "Web App Developer" },
  { color: "#664999", text: "Full Stack Developer" },
  { color: "#a0ae38", text: "Designer / Creator" },
  { color: "#a33939", text: "Leader" },
  { color: "#FF5733", text: "Team Player" }, // Brown
];

export const timelineItems = [
    {
      logo: vtlogo,
      companyName: "Virginia Tech",
      employmentType: "Full Time",
      year: "Aug 2023 - May 2025",
      role: "Student",
      description: "Master's degree in Computer Science and Applications. Mobile Application Development, Web Application Development, Cloud Computing, Machine Learning, Information Visualization, Introduction to Artificial Intelligence, Introduction to Urban Computing, Ethics and Professionalism in Computer Science, Machine Learning with Big Data. GPA: 3.74/4",
      category: "education",
    },
    {
      logo: vtlogo,
      companyName: "Virginia Tech",
      employmentType: "Part Time",
      year: "Feb 2024 - Apr 2025",
      role: "Outreach Assistant",
      description: "Planned and executed engaging campus events to boost student participation. Designed flyers that effectively communicated event details to the student community. Coordinated all event logistics and collaborated with teams to ensure seamless organization. Maintained a positive and professional demeanor, ensuring every detail was perfectly managed.",
      category: "campus",
    },
    {
      logo: vticlogo,
      companyName: "Virginia Tech Innovation Campus",
      employmentType: "Part Time",
      year: "Jun 2024 - Feb 2025",
      role: "Admissions Assistant",
      description: "Assisted both international and domestic students with admissions queries, ensuring a smooth application process. Managed research projects including compiling college newsletters and conducted extensive research to identify prospective colleges and evaluate their academic programs for targeted partnership initiatives. Demonstrated strong management, coordination, and communication skills in a fast-paced, dynamic environment.",
      category: "campus",
    },
    {
      logo: vtlogo,
      companyName: "Virginia Tech University Libraries",
      employmentType: "Part Time",
      year: "Aug 2024 - Jan 2025",
      role: "Student Assistant",
      description: "Assisted students at the front desk, providing guidance on library services and addressing inquiries efficiently. Managed book check-outs for patrons, ensuring accurate record-keeping and a smooth circulation process. Coordinated planning for game nights and other events, fostering a welcoming and engaging community atmosphere.",
      category: "campus",
    },
    {
      logo: truein,
      companyName: "Yugstart Technologies Pvt Ltd (Truein)",
      employmentType: "Full Time",
      year: "Oct  2020 - Jul 2023",
      role: "Software Engineer",
      description: [
        "Led end-to-end software development lifecycle, at the B2B SaaS startup, scaling product users from a few hundred to 300K.",
        "Directed migration of two applications to a cross-platform architecture, adopted by 500+ large enterprise clients.",
        "Guided 2 engineers and collaborated directly with the co-founder on the strategic revamp of UI/UX of core applications.",
        "Re-engineered critical application plugin, reducing system crashes by 54% as monitored by the Firebase Crashlytics console.",
        "Developed an offline backup solution by managing SQLite operations and JSON serialization, with an option to sync them to MySQL database, preserving 95% of attendance data locally, and enhancing system resilience by 60%.",
        "Refined real-time location data fetching via algorithm optimization, improving accuracy by 31% and retaining a major client.",
        "Delivered 30+ major features through agile processes, secured Node.js APIs with JWT (JSON Web Token), reducing unauthorized access by 90% and integrated frontend APIs using BLoC/Riverpod, boosting efficiency by 40%."
      ],
      category: "industry",
    },
    {
      logo: densoft,
      companyName: "Densoft Infotech Pvt Ltd",
      employmentType: "Full Time",
      year: "Mar 2019 - Oct 2020",
      role: "Android App Developer",
      description: [
        "Worked on multiple applications from scratch across diverse domains including EdTech, Healthcare and Finance, overseeing the full development lifecycle from requirements gathering and system design to successful production launch.",
        "Designed multimedia streaming, location tracking and audio/video calling features, using Java, driving engagement by 60%.",
        "Implemented push notification using OneSignal, significantly improving user interaction and communication efficiency.",
        "Enhanced offline data access, introduced multilingual UI and integrated appointment scheduling feature with deep linking.",
        "Built user authentication for secure login using Firebase, refining concurrent session handling by 80%."
      ],
      category: "industry",
    },
    {
      logo: byjus,
      companyName: "Byjus (The Learning App)",
      employmentType: "Part Time",
      year: "Jun 2018 - Sep 2018",
      role: "Business Development Associate",
      description: "Analysed aspirants learning needs for India’s most toughest UPSC exam, recommending appropriate products.",
      category: "education",
    },
    {
      logo: bharatividyapeeth,
      companyName: "Bharati Vidyapeeth's College of Engineering for Women",
      employmentType: "Full Time",
      year: "Aug 2014 - May 2018",
      role: "Student",
      description: "Bachelor's degree in Computer Science and Engineering. Data Structure and Problem Solving, Object Oriented and Multicore Programming, Conmputer Graphics and Gaming, Database Management and System Applications, Software Engineering, Design and Analysis of Algorithms, Data Mining Technology and Applications.  CGPA: 8.45/10",
      category: "education",
    },
];

export const skills = [
  { name: "Flutter", logo: flutterLogo, color: "#02569B" },
  { name: "JavaScript", logo: jsLogo, color: "#F7DF1E" },
  { name: "Git", logo: gitLogo, color: "#F05032" },
  { name: "React", logo: reactLogo, color: "#61DAFB" },
  { name: "Python", logo: pythonLogo, color: "#3776AB" },
  { name: "Node.js", logo: nodeLogo, color: "#339933" },
  { name: "Firebase", logo: firebaseLogo, color: "#FFCA28" },
  { name: "Dart", logo: dartLogo, color: "#0175C2" },
  { name: "Java", logo: javaLogo, color: "#007396" },
  { name: "Figma", logo: figmaLogo, color: "#F24E1E" },
  { name: "Notion", logo: notionLogo, color: "#FFFFFF" },
  { name: "Tailwind CSS", logo: tailwindLogo, color: "#38B2AC" },
  { name: "PyCharm", logo: pycharmLogo, color: "#21D789" },
  { name: "Canva", logo: canvaLogo, color: "#00C4CC" },
  { name: "HTML", logo: htmlLogo, color: "#E34F26" },
  { name: "CSS", logo: cssLogo, color: "#1572B6" },
  { name: "Next.js", logo: nextjsLogo, color: "#666666" },
  { name: "VS Code", logo: vscodeLogo, color: "#007ACC" },
  { name: "IntelliJ IDEA", logo: intellijLogo, color: "#000000" },
  { name: "Android Studio", logo: androidStudioLogo, color: "#3DDC84" },
  { name: "MySQL", logo: mysqlLogo, color: "#4479A1" },
  { name: "AWS", logo: awsLogo, color: "#FF9900" },
  { name: "Kotlin", logo: kotlinLogo, color: "#0095D5" },
  { name: "MongoDB", logo: mongodbLogo, color: "#47A248" },
  { name: "Xcode", logo: xcodeLogo, color: "#1575F9" },
  { name: "Google Colab", logo: googlecolabLogo, color: "#F9AB00" },
];

export const projects = [
  {
    title: "UPass Manager",
    description: "This project is a cloud-based application that automates and streamlines the U-Pass card distribution process for colleges, replacing error-prone manual methods. It features secure access, real-time data validation, NFC/QR scanning, and automated notifications to ensure efficient and accurate management.",
    link: "https://github.com/nidhikamath2102/upassmanager",
    skills: "React, HTML, Tailwind CSS, JavaScript, MySQL, Next.js, AWS RDS, AWS S3, AWS SES, Figma, Recharts, NFC reader",
    image: upassmanager 
  },
  {
    title: "LifexAI (Bitcamp 2025 Hackathon)",
    description: "It is a personal financial detective that analyzes spending patterns, detects anomalies, and provides actionable insights to improve your financial health, all with a user friendly interface.",
    link: "https://github.com/nidhikamath2102/lifexai",
    skills: "React, HTML, Tailwind CSS, JavaScript, MongoDB, Gemini, Cloudflare, Next.js, Vercel",
    image: lifexai 
  },
  {
    title: "Ask Hokie (VT Hacks Hackathon)",
    description: "Ask Hokie is a virtual assistant designed to provide instant answers to questions about admissions, campus facilities, academic programs, and events. It helps users navigate the campus and find departmental services seamlessly. Additionally, it engages students by detailing extracurricular activities, clubs, support services, and offering emergency responses during crises.",
    link: "https://github.com/nidhikamath2102/hokie_plus_plus",
    skills: "React, HTML, CSS, JavaScript, MongoDB, RAG, LLM, BeautifulSoup, Pandas",
    image: askHokie 
  },
  {
    title: "DoDEx (Bitcamp 2024 Hackathon)",
    description: "DoDEx is an intelligent parser that automatically extracts key attributes from Defense Contract Notices. It processes notices to capture essential details such as Federal Agency, Contract Amounts, Dates, Company Names, and Locations. Finally, it validates the data to provide an accuracy measure for the extracted information.",
    link: "https://github.com/nidhikamath2102/DoDEx",
    skills: "Python, LLM, RAG, Selenium, BeautifulSoup, JSON, Pandas, VS Code",
    image: placeHolder
  },
  {
    title: "Bookstore Web Application",
    description: "The Bookstore Web Application is a full-stack platform designed to offer a seamless shopping experience. It supports secure user authentication, product browsing, cart management, checkout, and order tracking. Additionally, it provides administrative features for adding, updating, and deleting book listings.",
    link: "https://github.com/nidhikamath2102/NidhiBookstoreReact",
    skills: "React, HTML, CSS, JavaScript, Java, MySQL, Figma, Pycharm",
    image: bookStoreWebApp
  },
];
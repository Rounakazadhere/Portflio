import selfImage from '../assets/photos/self_photo_final.png';
import javaLpu from '../assets/photos/javaLpu.pdf';
import genAiCert from '../assets/photos/GenAiPw.jpeg';
// import rpaDiploma from '../assets/photos/Automation Developer Associate Training (v2024.10) for ICT Academy Cohort 2_Rounak Azad_en-US_diploma.pdf';
import sqlCert from '../assets/photos/From Relational Model (SQL) to MongoDB\'s Document Model.pdf';
import privacyCert from '../assets/photos/Privacy and Security in Online Social Media.pdf';
import dsaCert from '../assets/photos/DSALpu.jpeg';
import oopCert from '../assets/photos/oopsLpu.jpeg';
import autoDevCert from '../assets/photos/Automation Developer Associate Training (v2024.10) for ICT Academy Cohort 2_Rounak Azad_en-US_diploma.pdf';
import compTheoryCert from '../assets/photos/Computational Theory: Language Principle & Finite Automata Theory.pdf';
import digSysCert from '../assets/photos/Digital Systems: From Logic Gates to Processors.pdf';
import ethicalHackCert from '../assets/photos/Ethical Hacking Essentials (EHE).pdf';
import lyzrCert from '../assets/photos/Lyzr AI- Nation SkillUp.pdf';
import packetSwitchCert from '../assets/photos/Packet Sw itching Netw orks and Algorithms.pdf';
import pythonDataCert from '../assets/photos/Python for Data Science, AI & D evelopment.pdf';
import respWebCert from '../assets/photos/Responsive Web Design.pdf';
import bitsBytesCert from '../assets/photos/The Bits and Bytes of Compu ter Networking.pdf';
import timeMgmtCert from '../assets/photos/Time Management.pdf';
import javaSummerCert from '../assets/photos/JavaSummer.pdf';
import promptEngCert from '../assets/photos/ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM.pdf';
import noCodeAiCert from '../assets/photos/Build Generative AI Apps and Solutions with No-Code Tools.pdf';
import travelGuiderImg from '../assets/photos/chatbot  Screenshot.png';
import dogProjectImg from '../assets/photos/dogProject.png';
import attendifyImg from '../assets/photos/attendify.png';
import resumePdf from '../assets/photos/12326217cv3.pdf';

export const content = {
  hero: {
    name: "Rounak Azad",
    role: " FullStack Web Developer & RPA Developer",
    intro: "Strategic thinker and innovative developer specialized in building robust web applications with React, Node.js, and AI integrations.",
    resume: resumePdf,
  },
  about: {
    title: "About Me",
    description: "I am a Computer Science undergraduate at Lovely Professional University with a passion for solving complex problems. I have a strong foundation in Data Structures & Algorithms (150+ problems solved) and full-stack development. I thrive in building user-centric applications, from AI-powered travel assistants to data-driven management systems.",
    image: selfImage,
    education: [
      {
        degree: "B.Tech in Computer Science and Engineering",
        school: "Lovely Professional University, Punjab",
        period: "2023 - Present",
        grade: "CGPA: 6.0"
      },
      {
        degree: "Intermediate",
        school: "Kisan Inter College, Gaya, Bihar",
        period: "2020 - 2022"
      },
      {
        degree: "Matriculation",
        school: "Al-momin International School, Gaya, Bihar",
        period: "2018 - 2020"
      }
    ],
    achievements: [
      "Solved 150+ DSA problems across LeetCode and GeeksforGeeks.",
      "Certified in Privacy and Security in Online Social Media (NPTEL).",
      "Certified in RPA Basics and GitHub.",
    ]
  },
  skills: {
    title: "Expertise",
    list: [
      { name: "React & Tailwind", level: "Advanced" },
      { name: "JavaScript / Node.js", level: "Advanced" },
      { name: "C++ / C / PHP", level: "Intermediate" },
      { name: "MySQL / MongoDB", level: "Intermediate" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Generative AI / LLMs", level: "Intermediate" },

    ]
  },
  projects: {
    title: "Selected Work",
    items: [
      {
        title: "Travel Guider Chatbot",
        category: "AI & Web App",
        description: "A conversation agent utilizing GenAI/LLMs to generate detailed travel itineraries. Features real-time data fetching for flights/weather and a polished, responsive UI.",
        link: "https://github.com/Rounakazadhere/Travel-Guider-ChatBot",
        image: travelGuiderImg
      },
      // {
      //   title: "Student Dropout Analysis",
      //   category: "Data Analytics System",
      //   description: "Dynamic management system using PHP/MySQL to identify at-risk students. Includes algorithmic filtering and interactive dashboards that reduced identification time by 40%.",
      //   link: "https://github.com/Rounakazadhere",
      //   image: "https://placehold.co/800x600?text=Student+Analysis"
      // },
      {
        title: "Dog - Three Js Project",
        category: "Web Project",
        description: "A 3D web application using Three.js to create an interactive 3D model of a dog.",
        link: "https://github.com/Rounakazadhere/dogProject",
        live: "https://dog-gbnohtl9h-rounak-azads-projects.vercel.app/",
        image: dogProjectImg
      },
      {
        title: "SMS - School management System",
        category: "Web Project",
        description: "A comprehensive school management system built with PHP and MySQL. Features include student management, teacher management, class management, and more.",
        link: "https://github.com/Rounakazadhere/attendify",
        live: "https://attendy-qsq7.onrender.com/",
        image: attendifyImg
      },
    ]
  },

  certificates: {
    title: "Certifications",
    items: [
      {
        title: "Generative AI for All",
        issuer: "PW Skills",
        period: "Jan 2026",
        description: "Introduction to Generative AI and its applications.",
        link: genAiCert
      },
      {
        title: "Automation Developer Associate",
        issuer: "ICT Academy | UiPath",
        period: "Jan 2026",
        description: "Diploma in Robotic Process Automation development.",
        link: autoDevCert
      },
      {
        title: "Lyzr AI - Nation SkillUp",
        issuer: "Lyzr AI - GFG",
        period: "Dec 2025",
        description: "Specialized training in AI tools and applications.",
        link: lyzrCert
      },
      {
        title: "Computational Theory",
        issuer: "Infosys",
        period: " Aug 2025",
        description: "Understanding language principles and finite automata theory.",
        link: compTheoryCert
      },
      {
        title: "ChatGPT-4 Prompt Engineering",
        issuer: "Coursera",
        period: "Aug 2025",
        description: "Mastering prompt engineering for LLMs like ChatGPT.",
        link: promptEngCert
      },
      {
        title: "No-Code AI Apps",
        issuer: "Coursera",
        period: "Aug 2025",
        description: "Building generative AI solutions without coding.",
        link: noCodeAiCert
      },
      {
        title: "From Relational Model (SQL) to MongoDB's Document Model",
        issuer: "MongoDB",
        period: "Jul 2025",
        description: "Transitioning database schema design from SQL to NoSQL paradigms.",
        link: sqlCert
      },
      {
        title: "Java Summer Training",
        issuer: "LPU",
        period: "July 2025",
        description: "Intensive summer training program in Java development.",
        link: javaSummerCert
      },
      {
        title: "Time Management",
        issuer: "Coursera",
        period: "June 2025",
        description: "Professional skill development in effective time management.",
        link: timeMgmtCert
      },
      {
        title: "Java Programming",
        issuer: "LPU | NeoColab",
        period: "May 2025",
        description: "Comprehensive training on Java programming fundamentals and object-oriented concepts.",
        link: javaLpu
      },
      {
        title: "Privacy and Security in Online Social Media",
        issuer: "NPTEL",
        period: "Apr 2025",
        description: "In-depth course on data privacy protocols and security challenges in social networks.",
        link: privacyCert
      },
      {
        title: "Data Structure and Algorithm",
        issuer: "LPU | NeoColab",
        period: "Dec 2024",
        description: "Advanced problem solving and algorithmic thinking using standard data structures.",
        link: dsaCert
      },
      {
        title: "Object Oriented Programming",
        issuer: "LPU | NeoColab",
        period: "Dec 2024",
        description: "Mastery of OOP principles including inheritance, polymorphism, and encapsulation.",
        link: oopCert
      },
      {
        title: "Packet Switching Networks and Algorithms",
        issuer: "Coursera | University of Colorado Boulder",
        period: "Oct 2024",
        description: "Deep dive into network algorithms and packet switching.",
        link: packetSwitchCert
      },
      {
        title: "Digital Systems: From Logic Gates to Processors",
        issuer: "Coursera | Universitat Autonoma de Barcelona",
        period: "Sept 2024",
        description: "From logic gates to processors: understanding computer architecture.",
        link: digSysCert
      },
      {
        title: "RPA Basics and Introduction to UiPath",
        issuer: "UiPath",
        period: "Sep 2024",
        description: "Introduction to Robotic Process Automation and building bots with UiPath.",
        link: ""
      },
      {
        title: "Bits and Bytes of Networking",
        issuer: "Google | Coursera",
        period: "Sep 2024",
        description: "Comprehensive overview of computer networking fundamentals.",
        link: bitsBytesCert
      },
      {
        title: "Ethical Hacking Essentials",
        issuer: "EC-Council",
        period: "Mar 2024",
        description: "Introduction to ethical hacking methodologies and tools.",
        link: ethicalHackCert
      },
      {
        title: "Python for Data Science & AI",
        issuer: "Coursera | IBM",
        period: "Feb 2024",
        description: "Foundational Python skills for data science and AI development.",
        link: pythonDataCert
      },
      {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        period: "Dec 2023",
        description: "Certification in modern responsive web design principles.",
        link: respWebCert
      }
    ]
  },
  experience: {
    title: "Journey",
    items: [
      {
        company: "Lovely Professional University",
        role: "Java Maestro Trainee",
        period: "Jun 2025",
        description: "Developped cross-platform GUI applications using Java Swing/JavaFX. Implemented JDBC connectivity and MVC patterns to decouple business logic from UI."
      },
      // You can add more training or previous roles here if applicable
    ]
  },
  contact: {
    title: "Let's Connect",
    email: "rounakazad09@gmail.com",
    phone: "+91-7004139384",
    socials: [
      { name: "LinkedIn", link: "https://www.linkedin.com/in/rounakazad/" },
      { name: "GitHub", link: "https://github.com/Rounakazadhere" },
      { name: "Email", link: "mailto:rounakazad09@gmail.com" }
    ]
  }
};

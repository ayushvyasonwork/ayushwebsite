'use client';
import React, { useState, useEffect } from 'react';
import { Briefcase, Code, Cpu, Database, GitBranch, Github, Linkedin, Mail, MapPin, Phone, Server, Wind, Zap } from 'lucide-react';

// Main App Component
export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed antialiased selection:bg-teal-300 selection:text-teal-900">
      <div className="relative">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="#home" className="text-2xl font-bold text-white tracking-wider">
                <span className="text-teal-400">{'<'}</span>YourName<span className="text-teal-400">{' />'}</span>
              </a>
              <nav className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`text-sm font-medium transition-colors hover:text-teal-400 ${
                      activeSection === link.id ? 'text-teal-400' : 'text-slate-200'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <button className="md:hidden text-slate-200 hover:text-teal-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              </button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center">
            <div className="w-full">
              <p className="text-lg text-teal-400 mb-2">Hi, my name is</p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-100 tracking-tight">
                Your Name.
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-400 mt-2">
                I build things for the web.
              </h2>
              <p className="mt-6 max-w-xl text-lg text-slate-400">
                I'm a passionate MERN stack developer and a DSA enthusiast, specializing in building exceptional, high-performance web applications. I thrive on solving complex problems and creating seamless user experiences.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#projects" className="bg-teal-400 text-slate-900 font-semibold py-3 px-6 rounded-md hover:bg-teal-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/20">
                  View My Work
                </a>
                <a href="#contact" className="border border-teal-400 text-teal-400 font-semibold py-3 px-6 rounded-md hover:bg-teal-400/10 transition-all duration-300">
                  Get In Touch
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24">
            <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
              <span className="text-teal-400 text-2xl font-mono">01.</span> About Me
              <span className="h-px w-20 bg-slate-600 ml-4"></span>
            </h2>
            <div className="grid md:grid-cols-5 gap-10">
              <div className="md:col-span-3 text-slate-400 space-y-4 text-lg">
                <p>
                  Hello! I'm a software developer with a strong foundation in Data Structures and Algorithms, and a passion for building robust and scalable applications. My journey into web development started with a fascination for creating things that live on the internet, and it has since evolved into a full-fledged career.
                </p>
                <p>
                  As a MERN stack developer, I enjoy the entire process of application development, from brainstorming and architecting solutions to deploying them on the cloud. I have hands-on experience with modern technologies like <span className="text-teal-400">Node.js</span>, <span className="text-teal-400">React</span>, and <span className="text-teal-400">MongoDB</span>, and I'm always eager to explore new tools and frameworks.
                </p>
                <p>
                  My experience includes a frontend development internship at <span className="text-teal-400">WhatBytes</span> and contributions as a full-stack developer in <span className="text-teal-400">GSSoC 2024</span>. I'm proficient in languages like C++, Python, JavaScript, and Go, and I have experience with cloud services like AWS S3 and EC2, and real-time communication using WebRTC.
                </p>
              </div>
              <div className="md:col-span-2 flex justify-center items-start">
                  <div className="w-64 h-64 rounded-lg bg-slate-800 border-2 border-teal-400 relative group overflow-hidden">
                      <img 
                          src="https://placehold.co/300x300/1e293b/99f6e4?text=You" 
                          alt="Your Name" 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-teal-500/30 mix-blend-multiply"></div>
                  </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-24">
            <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
              <span className="text-teal-400 text-2xl font-mono">02.</span> My Tech Stack
              <span className="h-px w-20 bg-slate-600 ml-4"></span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <SkillCategory title="Languages" icon={<Code className="text-teal-400"/>} skills={['C/C++', 'Python', 'JavaScript', 'GoLang']} />
              <SkillCategory title="Backend" icon={<Server className="text-teal-400"/>} skills={['Node.js', 'Express.js', 'WebRTC', 'MediaSoup']} />
              <SkillCategory title="Databases" icon={<Database className="text-teal-400"/>} skills={['MongoDB', 'MySQL', 'Redis']} />
              <SkillCategory title="DevOps & Cloud" icon={<Cpu className="text-teal-400"/>} skills={['Docker', 'AWS S3', 'AWS EC2', 'Git & GitHub']} />
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-24">
            <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
              <span className="text-teal-400 text-2xl font-mono">03.</span> Where I've Worked
              <span className="h-px w-20 bg-slate-600 ml-4"></span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <ExperienceItem
                role="Full Stack Developer"
                company="GSSoC 2024 (Extended)"
                duration="Summer 2024"
                details={[
                  "Contributed to open-source projects, developing and maintaining full-stack features.",
                  "Collaborated with a diverse team of developers, participating in code reviews and agile sprints.",
                  "Worked on both frontend (React) and backend (Node.js) components, enhancing application functionality and performance."
                ]}
              />
              <ExperienceItem
                role="Frontend Developer Intern"
                company="WhatBytes"
                duration="Date - Date"
                details={[
                  "Developed and maintained responsive user interfaces for web applications using modern frontend frameworks.",
                  "Collaborated with UI/UX designers to translate wireframes and mockups into high-quality code.",
                  "Optimized web applications for maximum speed and scalability, ensuring a seamless user experience."
                ]}
              />
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-24">
            <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
              <span className="text-teal-400 text-2xl font-mono">04.</span> Some Things I've Built
              <span className="h-px w-20 bg-slate-600 ml-4"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Real-Time Video Chat App"
                description="A high-performance video conferencing application supporting multiple users, screen sharing, and text chat, built with WebRTC and MediaSoup for optimized media streaming."
                tech={['React', 'Node.js', 'WebRTC', 'MediaSoup', 'Socket.io']}
                githubUrl="#"
                liveUrl="#"
              />
              <ProjectCard
                title="E-commerce Platform"
                description="A full-featured e-commerce site with product listings, user authentication, shopping cart, and a secure checkout process. Integrated Redis for efficient caching of product data."
                tech={['MERN Stack', 'Redux', 'Redis', 'Stripe API']}
                githubUrl="#"
                liveUrl="#"
              />
              <ProjectCard
                title="Cloud Storage Service"
                description="A clone of a popular cloud storage service allowing users to upload, download, and manage files. Built with a scalable architecture using AWS S3 for storage and EC2 for hosting."
                tech={['Node.js', 'React', 'MongoDB', 'AWS S3', 'Docker']}
                githubUrl="#"
                liveUrl="#"
              />
               <ProjectCard
                title="CodeSync - Collaborative Editor"
                description="A real-time collaborative code editor where multiple users can write and edit code simultaneously. Features syntax highlighting and live updates."
                tech={['React', 'Node.js', 'WebSockets', 'Monaco Editor']}
                githubUrl="#"
                liveUrl="#"
              />
              <ProjectCard
                title="LinkShortify - URL Shortener"
                description="A high-performance URL shortening service built with GoLang and Redis. Provides custom short links and tracks click analytics."
                tech={['GoLang', 'Redis', 'React', 'Docker']}
                githubUrl="#"
                liveUrl="#"
              />
               <ProjectCard
                title="DevOps CI/CD Pipeline"
                description="Designed and implemented a complete CI/CD pipeline for a Node.js application using Docker and GitHub Actions, automating testing and deployment to AWS EC2."
                tech={['Docker', 'GitHub Actions', 'AWS EC2', 'Nginx']}
                githubUrl="#"
                liveUrl="#"
              />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24 text-center">
            <h2 className="text-2xl font-mono text-teal-400 mb-2">05. What's Next?</h2>
            <h3 className="text-5xl font-bold text-slate-100 mb-4">Get In Touch</h3>
            <p className="max-w-2xl mx-auto text-slate-400 mb-8">
              I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open. I'll do my best to get back to you!
            </p>
            <a href="mailto:youremail@example.com" className="inline-block bg-teal-400 text-slate-900 font-semibold py-4 px-8 rounded-md hover:bg-teal-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/20">
              Say Hello
            </a>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="flex space-x-6 mb-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors"><Github size={24} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors"><Linkedin size={24} /></a>
              <a href="mailto:youremail@example.com" className="text-slate-400 hover:text-teal-400 transition-colors"><Mail size={24} /></a>
            </div>
            <p className="text-sm text-slate-500">
              Designed & Built by Your Name.
            </p>
             <p className="text-xs text-slate-600 mt-1">
              Inspired by Brittany Chiang's portfolio.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Sub-components

const SkillCategory = ({ title, icon, skills }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg hover:shadow-teal-500/10 transition-shadow duration-300">
    <div className="flex items-center gap-4 mb-4">
      {icon}
      <h3 className="text-xl font-bold text-slate-100">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center gap-2 text-slate-400">
          <Zap size={14} className="text-teal-400" />
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ExperienceItem = ({ role, company, duration, details }) => (
  <div className="relative pl-8 mb-10 border-l-2 border-slate-700">
    <div className="absolute -left-3.5 top-1.5 w-6 h-6 bg-slate-900 border-2 border-teal-400 rounded-full"></div>
    <h3 className="text-xl font-bold text-slate-100">{role} @ <span className="text-teal-400">{company}</span></h3>
    <p className="text-sm text-slate-500 mb-4 font-mono">{duration}</p>
    <ul className="list-disc list-inside space-y-2 text-slate-400">
      {details.map((detail, index) => <li key={index}>{detail}</li>)}
    </ul>
  </div>
);

const ProjectCard = ({ title, description, tech, githubUrl, liveUrl }) => (
  <div className="bg-slate-800/50 rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10">
    <div className="p-6 flex-grow">
      <div className="flex justify-between items-center mb-4">
        <Briefcase className="text-teal-400" size={32} />
        <div className="flex gap-3">
          {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors"><Github size={20} /></a>}
          {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>}
        </div>
      </div>
      <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-teal-400 transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm mb-4 flex-grow">{description}</p>
    </div>
    <div className="p-6 bg-slate-900/50">
      <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-slate-500">
        {tech.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  </div>
);

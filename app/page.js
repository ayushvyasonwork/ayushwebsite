'use client';
import React, { useState, useEffect } from 'react';
import { Briefcase, Code, Cpu, Database, Github, Linkedin, Mail, Server, Zap } from 'lucide-react';

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
                <span className="text-teal-400">{'<'}</span>Ayush Kumar Vyas<span className="text-teal-400">{' />'}</span>
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
                Ayush Kumar Vyas.
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
                  My experience includes a frontend development internship at <span className="text-teal-400">WhatBytes</span> and contributions as a open source contributor in <span className="text-teal-400">GSSoC 2024</span>. I'm proficient in languages like C++, Python, and JavaScript, and I have experience with cloud services like AWS S3 and EC2, and real-time communication using WebRTC.
                </p>
              </div>
              <div className="md:col-span-2 flex justify-center items-start">
                  <div className="w-64 h-64 rounded-lg bg-slate-800 border-2 border-teal-400 relative group overflow-hidden">
                      <img 
                          src="https://avatars.githubusercontent.com/u/122043697?v=4" 
                          alt="Ayush Kumar Vyas" 
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
              <SkillCategory title="Languages" icon={<Code className="text-teal-400"/>} skills={['C/C++', 'JavaScript', 'Python', 'TypeScript']} />
              <SkillCategory title="Libraries & Frameworks" icon={<Server className="text-teal-400"/>} skills={['Node.js', 'Express.js', 'React.js', 'Next.js', 'WebRTC', 'MediaSoup']} />
              <SkillCategory title="Databases" icon={<Database className="text-teal-400"/>} skills={['MongoDB', 'MySQL', 'Redis', 'PostgreSQL']} />
              <SkillCategory title="DevOps & Cloud" icon={<Cpu className="text-teal-400"/>} skills={['Docker', 'AWS (EC2, S3)', 'Git/GitHub', 'CI/CD', 'Vercel', 'Nginx']} />
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
                role="Frontend Developer Intern"
                company="Whatbytes (YC Backed)"
                duration="Jan 2025 - Mar 2025"
                details={[
                  "Led the redesign of a client's platform UI, improving user engagement by 30% using Next.js and Tailwind CSS.",
                  "Collaborated with cross-functional teams to integrate a new API, reducing page load times by 40%.",
                  "Engineered a component to handle complex data structures, streamlining data processing by 50%."
                ]}
              />
              <ExperienceItem
                role="Open Source Contributor"
                company="GsSoc'24 Extd."
                duration="Oct 2024 - Nov 2024"
                details={[
                  "Contributed to multiple open-source projects, implementing features and bug fixes that reduced reported issues by 30%.",
                  "Collaborated with 50+ contributors via GitHub, achieving a 100% merge acceptance rate.",
                  "Ensured clean, maintainable code aligned with project guidelines through active participation in code reviews."
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
                title="Tasveer – AI Integrated Social App"
                description="Built a social media app with a dual-stage AI song recommender (Gemini API) for mood detection from images. Implemented Redis caching to reduce latency by 60% and a real-time feed to boost user engagement."
                tech={['React', 'Node.js', 'MongoDB', 'Redis', 'Socket.io', 'Gemini API']}
                githubUrl="https://github.com/ayushvyasonwork/Tasveer"
                liveUrl="https://tasveer-one.vercel.app/"
              />
              <ProjectCard
                title="UTalk - SFU Video Conferencing App"
                description="A real-time video conferencing app with low latency (<100ms) using WebRTC and Mediasoup. Features a Selective Forwarding Unit (SFU) architecture for efficient bandwidth usage, enabling scalability to hundreds of participants."
                tech={['Node.js', 'Express.js', 'Mediasoup', 'WebRTC', 'Socket.io']}
                githubUrl="https://github.com/ayushvyasonwork/VTalks"
                liveUrl="#"
              />
              <ProjectCard
                title="Baazaar - E-commerce Platform"
                description="A full-featured e-commerce platform built with React and Redux for state management. Includes product search, a shopping cart, and user authentication for a complete online shopping experience."
                tech={['React', 'Redux', 'JavaScript', 'Firebase']}
                githubUrl="https://github.com/ayushvyasonwork/baazaar"
                liveUrl="https://baazaar-rho.vercel.app/"
              />
               <ProjectCard
                title="BuddyTrail - Social Travel Planner"
                description="A social travel platform where users can plan trips, share itineraries, and document their journeys. Built with a responsive MERN stack architecture for a seamless user experience on any device."
                tech={['Node.js', 'React', 'MongoDB', 'Express.js']}
                githubUrl="https://github.com/PriyaGhosal/BuddyTrail"
                liveUrl="https://67c1ececf03082008b5a3caf--deft-gumdrop-157857.netlify.app/"
              />
            </div>
          </section>

          {/* Contact Section */}
          <ContactForm />
        </main>

        {/* Footer */}
        <footer className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="flex space-x-6 mb-4">
              <a href="https://github.com/ayushvyasonwork" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/ayush-vyas-a7b5b5257/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors"><Linkedin size={24} /></a>
              <a href="mailto:work.ayushvyas17@gmail.com" className="text-slate-400 hover:text-teal-400 transition-colors"><Mail size={24} /></a>
            </div>
            <p className="text-sm text-slate-500">
              Designed & Built by Ayush Kumar Vyas.
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
// Add this updated component to your file, replacing the old ContactForm.
const ContactForm = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("Thanks for your message! I'll get back to you soon.");
        form.reset();
      } else {
        const responseData = await response.json();
        if (responseData.errors) {
            setStatus(responseData.errors.map(error => error.message).join(", "));
        } else {
            setStatus("Oops! There was a problem submitting your form.");
        }
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="text-center">
        <h2 className="text-2xl font-mono text-teal-400 mb-2">05. What's Next?</h2>
        <h3 className="text-5xl font-bold text-slate-100 mb-4">Get In Touch</h3>
        <p className="max-w-2xl mx-auto text-slate-400 mb-8">
          I'm currently open to new opportunities. My inbox is always open, whether you have a question or just want to say hii!
        </p>
      </div>
      
      <form 
        onSubmit={handleSubmit}
        action="https://formspree.io/f/mgvzbkgk" // <-- 🚨 PASTE YOUR FORMSPREE URL HERE
        method="POST"
        className="max-w-xl mx-auto mt-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            className="bg-slate-800/50 w-full rounded-md p-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            className="bg-slate-800/50 w-full rounded-md p-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
          />
        </div>
        <textarea 
          name="message" 
          placeholder="Your Message" 
          rows="5" 
          required
          className="bg-slate-800/50 w-full rounded-md p-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400 transition mb-6"
        ></textarea>
        <div className="text-center">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-teal-400 text-slate-900 font-semibold py-3 px-8 rounded-md hover:bg-teal-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/20 flex items-center justify-center w-40 mx-auto disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <svg className="animate-spin h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
        {status && <p className="text-center text-teal-300 mt-4">{status}</p>}
      </form>
    </section>
  );
};
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
          {githubUrl && githubUrl !== "#" && <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors"><Github size={20} /></a>}
          {liveUrl && liveUrl !== "#" && <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
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
"use client";

import React from "react";
import {
  Briefcase,
  GraduationCap,
  Code,
  Mail,
  ArrowRight,
  FolderGit,
  Linkedin,
  Github,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  const menuItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
  ];

  const toggleMenu = () => {
    const mobileNav = document.getElementById("mobile-nav");
    mobileNav?.classList.toggle("hidden");
  };

  const skills = {
    "Mobile Development": ["React Native", "Flutter", "Android (Kotlin)", "iOS (Swift)"],
    "Frontend Development": ["React", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML & CSS", "TailwindCSS", "Redux", "Zustand", "Laravel"],
    "Backend": ["Node.js", "Nuxt.js", "Express.js", "RESTful APIs", "PostGreSQL"],
    "Database": ["Firebase", "MySQL", "MongoDB"],
    "Tools & Workflow": ["Git", "GitHub Actions", "CI/CD", "Jira", "Figma", "Agile/Scrum"],
  };

  const experience = [
    {
      title: "Mobile Developer",
      company: "PT Cashlez Worldwide Indonesia Tbk",
      dates: "July 2025 - Present",
      description: "Shipped POS features (QRIS, debit/credit cards, e-wallets) on Android, enabling thousands of merchants to process cashless payments securely. Integrated app with EDC devices and thermal printers, improving transaction speed and reliability.",
      tools: ["Kotlin", "Java", "Android", "Flutter"],
    },
    {
      title: "React Native Developer (Freelance)",
      company: "PT Vodjo Teknologi Indonesia",
      dates: "March 2025 - July 2025",
      description: "Delivered features for PLN Logistic and Jahitmart, improving logistics efficiency and e-commerce engagement. Integrated Firebase services (Messaging, Crashlytics), boosting scalability and crash reporting.",
      tools: ["React Native", "Redux", "Zustand", "TypeScript"],
    },
    {
      title: "Mobile & Frontend Developer",
      company: "PT IDStar Cipta Teknologi",
      dates: "September 2023 - March 2025",
      description: "Played a key role in developing financing features for Octo Smart CNAF and building an internal library. Collaborated with cross-functional teams for API integration in an Agile environment.",
      tools: ["React Native", "Redux", "ReactJS", "TypeScript", "CI/CD"],
    },
    {
      title: "React Native Developer",
      company: "PT Telkom Indonesia",
      dates: "August 2020-December 2023",
      description: "Developed Padi UMKM, a B2B e-commerce platform for MSMEs. Implemented automated testing (Jest, Cypress), achieving 80% coverage. Mentored 2 junior developers.",
      tools: ["React Native", "Redux", "TailwindCSS", "TypeScript", "CI/CD"],
    },
    {
      title: "React Native Developer (Freelance)",
      company: "PT Anabatic Technology",
      dates: "January 2023 - March 2023",
      description: "Delivered D-Wallet digital banking app for Bank Danamon, supporting QRIS payments, bill pay, and balance tracking. Ensured secure and seamless UX by integrating APIs and conducting thorough QA in Agile cycles.",
      tools: ["React Native", "Android", "iOS", "Redux", "Firebase"],
    },
    {
      title: "React Native Developer",
      company: "PT Qareer Harapan Asia",
      dates: "November 2018 - August 2020",
      description: "Launched job portal apps (Qerja, Karir.com, Qareer) with React Native, reaching thousands of job seekers. Automated OTA updates via CodePush, cutting release effort by 40%.",
      tools: ["React Native", "Android", "iOS", "Redux", "Firebase"],
    },
    {
      title: "React Native Developer",
      company: "PT Nuesto Teknologi Indonesia",
      dates: "March 2018 - November 2018",
      description: "Shipped Qiwii (digital queuing system), improving customer service efficiency and reducing wait times. Developed internal product apps with reusable code modules.",
      tools: ["React Native", "Redux", "Mobx", "Firebase", "Fastlane"],
    },
    {
      title: "React Native Developer",
      company: "41Studio",
      dates: "July 2017 - March 2018",
      description: "Built wardrobe mobile app in React Native, enhancing UX and performance. Collaborated with backend, QA, and design teams for API integration and smooth delivery.",
      tools: ["React Native", "Swift", "Java", "Apiary"],
    },
    {
      title: "Android Developer",
      company: "PT Algoritma Solusi Nusantara",
      dates: "January 2017 - May 2017",
      description: "Developed client Android apps in Java, focusing on maintainable architecture and high performance. Integrated REST APIs and collaborated cross-functionally.",
      tools: ["Java", "Android Studio"],
    },
    {
      title: "Android Developer",
      company: "PT Mandiri Distribusi Indonesia",
      dates: "August 2016 - December 2016",
      description: "Built internal Android apps, improving operational workflows and app responsiveness. Ensured on-time delivery using Agile, Jira, and Git version control.",
      tools: ["Java Android", "Android Studio"],
    },
  ];

  return (
    <div className="bg-[#040c18] text-gray-400 font-mono min-h-screen">
      {/* Header & Navigasi */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#040c18]/80 backdrop-blur-sm p-4 md:p-6 flex justify-center shadow-md">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <a
            href="#"
            className="text-accent text-2xl font-bold hover:text-white transition-colors"
          >
            RM
          </a>
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`cursor-pointer hover-underline text-gray-400`}
              >
                <span className="text-accent">0{index + 1}.</span> {item.label}
              </a>
            ))}
          </nav>
          <button
            onClick={toggleMenu}
            className="md:hidden text-accent hover:text-white"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Nav Menu */}
      <div id="mobile-nav" className="hidden fixed top-16 left-0 right-0 z-40 bg-[#040c18]/95 backdrop-blur-sm text-center p-4">
        {menuItems.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={toggleMenu}
            className="block text-xl py-2 my-1 text-gray-400 hover:text-accent transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 pt-20 md:py-12 md:pt-24 max-w-4xl">
        
        {/* Intro Section */}
        <section id="about" className="py-24 md:py-32">
          <p className="text-accent text-lg md:text-xl mb-4">
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-200 mb-2">
            Raka Mahardika.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mb-6">
            I build things for mobile.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
            I'm a Senior Mobile & Frontend Developer with 8+ years of experience building cross-platform applications. I specialize in React Native, Flutter, and implementing efficient CI/CD pipelines to deliver scalable and user-friendly solutions.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/mahardikaindra" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rakamahardikaindra/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:rakamahardika.project@gmail.com" className="text-gray-400 hover:text-accent transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24">
          <h2 className="text-3xl font-bold text-gray-200 mb-8 flex items-center">
            <Briefcase size={28} className="text-accent mr-3" /> Experience
          </h2>
          {experience.map((exp, index) => (
            <div key={index} className="p-6 bg-card rounded-md shadow-lg mb-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-200">{exp.title}</h3>
                <span className="text-sm text-gray-500">{exp.dates}</span>
              </div>
              <p className="text-accent mb-2">{exp.company}</p>
              <p className="text-gray-400 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tools.map((tool, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-full bg-[#112a45] text-accent">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24">
          <h2 className="text-3xl font-bold text-gray-200 mb-8 flex items-center">
            <FolderGit size={28} className="text-accent mr-3" /> Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Project Item - Replace with your real project data */}
            <a href="#" className="p-6 bg-card rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="flex justify-between items-center mb-4">
                <FolderGit className="text-accent" size={40} />
                <ArrowRight className="text-gray-500" size={20} />
              </div>
              <h3 className="text-lg font-bold text-gray-200 mb-2">Octo Smart CNAF</h3>
              <p className="text-sm text-gray-400 mb-4">A financing app for bank users. Built with React Native and Redux.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-[#112a45] text-accent rounded-full">React Native</span>
                <span className="text-xs px-2 py-1 bg-[#112a45] text-accent rounded-full">Redux</span>
                <span className="text-xs px-2 py-1 bg-[#112a45] text-accent rounded-full">CI/CD</span>
              </div>
            </a>
            <a href="#" className="p-6 bg-card rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="flex justify-between items-center mb-4">
                <FolderGit className="text-accent" size={40} />
                <ArrowRight className="text-gray-500" size={20} />
              </div>
              <h3 className="text-lg font-bold text-gray-200 mb-2">MySooltan</h3>
              <p className="text-sm text-gray-400 mb-4">A fintech app that helps SMEs. Implemented with Flutter and Firebase.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-[#112a45] text-accent rounded-full">Flutter</span>
                <span className="text-xs px-2 py-1 bg-[#112a45] text-accent rounded-full">Firebase</span>
              </div>
            </a>
            <a href="#" className="p-6 bg-card rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="flex justify-between items-center mb-4">
                <FolderGit className="text-accent" size={40} />
                <ArrowRight className="text-gray-500" size={20} />
              </div>
              <h3 className="text-lg font-bold text-gray-200 mb-2">Arjuna (Web)</h3>
              <p className="text-sm text-gray-400 mb-4">A web development planning module project using React.js and TypeScript.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-[#112a45] text-accent rounded-full">ReactJS</span>
                <span className="text-xs px-2 py-1 bg-[#112a45] text-accent rounded-full">TypeScript</span>
              </div>
            </a>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 md:py-24">
          <h2 className="text-3xl font-bold text-gray-200 mb-8 flex items-center">
            <GraduationCap size={28} className="text-accent mr-3" /> Education & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-md shadow-lg">
              <h3 className="text-xl font-semibold text-gray-200 mb-4">Education</h3>
              <ul className="text-gray-400 space-y-4">
                <li>
                  <p className="text-gray-200 font-bold">Bachelor of Informatics Engineering</p>
                  <p className="text-sm">Widyatama University, Bandung</p>
                </li>
                <li>
                  <p className="text-gray-200 font-bold">Vocational School Diploma</p>
                  <p className="text-sm">SMK Pasundan 2 Bandung</p>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-card rounded-md shadow-lg">
              <h3 className="text-xl font-semibold text-gray-200 mb-4">Certifications</h3>
              <ul className="text-gray-400 space-y-4">
                <li>
                  <p className="text-gray-200 font-bold">Google Career Certificates</p>
                  <p className="text-sm">Data Analyst, Business Intelligence, UI/UX</p>
                </li>
                <li>
                  <p className="text-gray-200 font-bold">Dicoding</p>
                  <p className="text-sm">JavaScript, Backend Developer, Android, Kotlin, NodeJS</p>
                </li>
                <li>
                  <p className="text-gray-200 font-bold">Ekipa</p>
                  <p className="text-sm">Scrum Master Fundamental, Scrum Master</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24">
          <h2 className="text-3xl font-bold text-gray-200 mb-8 flex items-center">
            <Code size={28} className="text-accent mr-3" /> Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(skills).map((category, index) => (
              <div key={index} className="p-6 bg-card rounded-md shadow-lg">
                <h3 className="text-lg font-semibold text-accent mb-4">{category}</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  {skills[category].map((skill: any, i: any) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center text-sm text-gray-500">
          <p>
            Designed & Built by Raka Mahardika. Inspired by Brittany Chiang.
          </p>
        </footer>
      </main>
    </div>
  );
}

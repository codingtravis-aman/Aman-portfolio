import { useTheme } from "../hooks/useTheme";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-image.jpg";

const Hero = () => {
  const { theme } = useTheme();
  
  // SVG Background pattern for light mode
  const lightPatternSVG = `data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%233b82f6' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E`;
  
  // SVG Background pattern for dark mode
  const darkPatternSVG = `data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%233b82f6' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E`;
  
  return (
    <section 
      id="hero" 
      className={`relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden`}
      style={{
        backgroundImage: `url(${theme === "dark" ? darkPatternSVG : lightPatternSVG})`,
        backgroundAttachment: "fixed"
      }}
      data-scroll-section
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
      
      {/* Floating elements - subtle animation */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute top-32 -right-16 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          {/* Text content - takes 3 of 5 columns on large screens */}
          <motion.div 
            className="lg:col-span-3 order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 border border-primary/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-primary font-medium">Software Developer & Full Stack Engineer</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-sans mb-6 tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              I'm <span className="text-primary">Aman Jha</span>
              <span className="block mt-2">Crafting Digital Experiences</span>
            </motion.h1>
            
            <motion.p 
              className={`${theme === "dark" ? "text-white/70" : "text-black/70"} text-lg mb-8 max-w-xl leading-relaxed`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Specializing in building exceptional digital products, applications, and experiences with modern technologies. 
              I focus on creating seamless, user-centric solutions that solve real-world problems.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a 
                href="#contact" 
                className="px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 flex items-center group"
                data-scroll-to
              >
                Let's Work Together
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a 
                href="#projects" 
                className={`px-8 py-4 ${theme === "dark" ? "bg-gray-800" : "bg-white"} border border-primary/20 text-primary font-medium rounded-lg hover:border-primary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center`}
                data-scroll-to
              >
                View My Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </motion.div>
            
            {/* Tech stack section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <p className={`${theme === "dark" ? "text-white/50" : "text-black/50"} text-sm uppercase font-medium tracking-wider mb-3`}>
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-4">
                {["React", "Node.js", "Typescript", "Python", "AWS", "MongoDB"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    className={`px-4 py-2 rounded-lg ${theme === "dark" ? "bg-gray-800/70" : "bg-white/70"} shadow-sm border ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                    whileHover={{ y: -5, backgroundColor: theme === "dark" ? "rgba(30, 41, 59, 0.9)" : "rgba(255, 255, 255, 0.9)" }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Social links */}
            <motion.div 
              className="mt-10 flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <a 
                href="https://github.com/codingtravis-aman" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-lg flex items-center justify-center hover:text-primary hover:scale-110 transition-all`}
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/codingtravis_aman/profilecard/?igsh=MXBsMmR6cWJjemU3Mg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-lg flex items-center justify-center hover:text-primary hover:scale-110 transition-all`}
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://x.com/codingtravis_" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-lg flex items-center justify-center hover:text-primary hover:scale-110 transition-all`}
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/aman-jha-0bb578211" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-lg flex items-center justify-center hover:text-primary hover:scale-110 transition-all`}
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Image content - takes 2 of 5 columns on large screens */}
          <motion.div 
            className="lg:col-span-2 order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`relative ${theme === "dark" ? "bg-gray-800/50" : "bg-white/50"} rounded-2xl p-3 shadow-2xl backdrop-blur-sm`}>
              {/* Main image */}
              <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <img 
                    src={heroImage} 
                    alt="Aman Jha - Professional Software Developer" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Experience badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg font-medium shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  5+ Years Experience
                </motion.div>
                
                {/* Image foreground content */}
                <motion.div
                  className="absolute bottom-0 left-0 p-6 w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-white text-opacity-90 font-medium">Available for freelance projects</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Floating cards */}
              <motion.div
                className={`absolute -bottom-6 -right-6 p-4 ${theme === "dark" ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg border border-primary/20 max-w-[200px]`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  <span className="font-semibold">Expert Services</span>
                </div>
                <div className="text-sm text-primary">
                  App Development, Web Solutions, AI Software
                </div>
              </motion.div>
              
              {/* Second floating card */}
              <motion.div
                className={`absolute -top-6 -left-6 p-3 ${theme === "dark" ? "bg-gray-800" : "bg-white"} rounded-full shadow-lg border border-primary/20`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{ y: -5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute left-1/2 bottom-12 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="text-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70 mx-auto">
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
          <span className="text-sm mt-2 block opacity-70">Scroll down</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

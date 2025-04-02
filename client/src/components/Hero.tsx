import { useTheme } from "../hooks/useTheme";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-image.jpg";

const Hero = () => {
  const { theme } = useTheme();
  
  // Simple pattern for the background
  const gridPattern = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0h50v50H0zm50 50h50v50H50z' fill='${theme === "dark" ? "%23ffffff08" : "%2301021908"}' /%3E%3C/svg%3E`;

  const techStacks = [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "Django", "PostgreSQL"]
    },
    {
      name: "Cloud",
      skills: ["AWS", "Firebase", "Docker", "CI/CD"]
    }
  ];
  
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
      style={{ 
        backgroundImage: `url(${gridPattern})`,
        backgroundColor: theme === "dark" ? "#080c1a" : "#f8fafc",
        position: "relative"
      }}
      data-scroll-section
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
      
      {/* Background blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-32 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-violet-500/5 rounded-full blur-3xl opacity-40"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto grid lg:grid-cols-12 gap-8 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 px-6 py-2.5 border border-purple-500/20 backdrop-blur-sm rounded-full bg-purple-500/5 text-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
              <span className="text-gradient font-medium">Crafting Digital Excellence</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="leading-tight block">Hello, I'm</span>
              <span className="text-purple-600 dark:text-purple-500 block">Aman Jha</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl max-w-xl leading-relaxed text-slate-700 dark:text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A creative full-stack developer specializing in building exceptional digital experiences, 
              intuitive interfaces, and powerful applications that solve real business problems.
            </motion.p>
          </motion.div>
          
          {/* Call to action buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a 
              href="#contact" 
              className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
              data-scroll-to
            >
              Let's Talk
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            
            <a
              href="#projects"
              className="px-6 py-3 bg-transparent text-purple-600 font-medium rounded-lg transition-all border border-purple-300 hover:border-purple-600 flex items-center gap-2"
              data-scroll-to
            >
              View Projects
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          </motion.div>
          
          {/* Tech Stack Showcase */}
          <motion.div 
            className="pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-base font-medium text-slate-600 dark:text-slate-400 mb-4">Expert In</h3>
            <div className="flex flex-wrap gap-8">
              {techStacks.map((stack, stackIndex) => (
                <motion.div 
                  key={stack.name}
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + (stackIndex * 0.1) }}
                >
                  <h4 className="text-purple-600 dark:text-purple-500 font-medium">{stack.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {stack.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800/30 rounded-md text-sm text-slate-800 dark:text-slate-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + (stackIndex * 0.05) + (skillIndex * 0.05) }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Social links */}
          <motion.div 
            className="flex items-center gap-6 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {[
              { 
                name: "GitHub", 
                href: "https://github.com/codingtravis-aman", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                )
              },
              { 
                name: "LinkedIn", 
                href: "https://www.linkedin.com/in/aman-jha-0bb578211", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                )
              },
              { 
                name: "Instagram", 
                href: "https://www.instagram.com/codingtravis_aman/profilecard/?igsh=MXBsMmR6cWJjemU3Mg==", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                )
              },
              { 
                name: "Twitter", 
                href: "https://x.com/codingtravis_", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                )
              }
            ].map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md hover:text-purple-600 hover:shadow-lg transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
        
        {/* Image Content */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border border-white/20 dark:border-gray-800/20 rounded-3xl overflow-hidden p-5 shadow-xl">
              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                  <img 
                    src={heroImage} 
                    alt="Aman Jha - Professional Software Developer" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                
                {/* Image overlay content */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-white font-medium text-sm">Available for new projects</span>
                  </div>
                  <div className="text-white/80 text-xs">Let's build something amazing together</div>
                </div>
                
                {/* Experience badge */}
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium shadow-lg text-sm">
                  5+ Years Experience
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -bottom-6 -right-6 p-4 rounded-xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-white/20 dark:border-gray-800/20 max-w-[200px] shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <span className="font-semibold text-sm">Full-Stack Services</span>
              </div>
              <div className="text-xs text-purple-600">
                App Development, Web Solutions, AI Integration
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -top-2 -left-6 p-3 rounded-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-white/20 dark:border-gray-800/20 shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute left-1/2 bottom-12 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="flex flex-col items-center"
        >
          <div className="w-6 h-10 rounded-full border-2 border-purple-500/30 flex justify-center p-1">
            <motion.div 
              className="w-1.5 h-1.5 bg-purple-600 rounded-full"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            />
          </div>
          <span className="text-xs mt-2 text-slate-500 dark:text-slate-400">Scroll Down</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

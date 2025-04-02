import { useTheme } from "../hooks/useTheme";
import { motion } from "framer-motion";

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

  // Services offered
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
      title: "App Development",
      description: "Native and cross-platform mobile applications with stunning UI/UX.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3c1 1 1 3.3 1 4 0 .7-.5 1.5-2 2" />
          <path d="M10 19c-1.7.5-2 1.3-2 2 0 .7 0 3 1 4" />
          <path d="M5 6c0-1.7.5-2 1-2 .7 0 3.7 0 5 1" />
          <path d="M19.5 14c.7 1 .7 2.3 0 3-1 1-3 2-5 1" />
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        </svg>
      ),
      title: "Web Development",
      description: "Fast, responsive, and SEO-friendly websites and web applications.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3c-1.2 0-2.4.5-3.3 1.3L12 12l3.3-7.7c-1-.8-2.1-1.3-3.3-1.3Z" />
          <path d="m19.1 4.9-7.1 7.1L19.1 4.9Z" />
          <path d="M4.9 4.9 12 12 4.9 4.9Z" />
          <path d="m7.8 17.8 7.1-7.1-7.1 7.1Z" />
          <path d="m16.2 17.8-7.1-7.1 7.1 7.1Z" />
          <path d="M12 21c1.2 0 2.4-.5 3.3-1.3L12 12l-3.3 7.7c.9.8 2.1 1.3 3.3 1.3Z" />
        </svg>
      ),
      title: "AI Solutions",
      description: "Intelligent software leveraging machine learning and artificial intelligence.",
    }
  ];
  
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
      style={{ 
        backgroundImage: `url(${gridPattern})`,
        backgroundColor: theme === "dark" ? "#0f1729" : "#f8fafc",
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
      
      <div className="container relative z-10 px-4 mx-auto">
        {/* Header section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 px-6 py-2.5 border border-purple-500/20 backdrop-blur-sm rounded-full bg-purple-500/5 text-sm mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
            <span className="text-purple-600 dark:text-purple-400 font-medium">Creative Software Developer</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hello, I'm <span className="text-purple-600 dark:text-purple-400">Aman Jha</span>
            <span className="block mt-4 text-4xl md:text-5xl bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 dark:from-purple-400 dark:via-blue-400 dark:to-indigo-500 text-transparent bg-clip-text font-extrabold">Crafting Digital Experiences</span>
          </motion.h1>
          
          <motion.p
            className="text-xl max-w-2xl mx-auto leading-relaxed text-gray-800 dark:text-gray-200 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A creative full-stack developer specializing in building exceptional digital products,
            intuitive interfaces, and powerful applications that solve real-world problems.
          </motion.p>
          
          {/* Call to action buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 pt-2 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a 
              href="#contact" 
              className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
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
              className="px-8 py-4 bg-transparent text-purple-600 dark:text-purple-400 font-semibold rounded-lg transition-all border border-purple-300 dark:border-purple-700 hover:border-purple-600 dark:hover:border-purple-500 flex items-center gap-2"
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
        </motion.div>
        
        {/* Services section that replaces the image */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Services I <span className="text-purple-600 dark:text-purple-400">Offer</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white dark:bg-gray-800/90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center backdrop-blur-sm border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.2) }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-800 dark:text-gray-200 font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Tech Stack Showcase */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-8 text-gray-900 dark:text-white">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-16">
            {techStacks.map((stack, stackIndex) => (
              <motion.div 
                key={stack.name}
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + (stackIndex * 0.1) }}
              >
                <h4 className="text-purple-600 dark:text-purple-400 font-semibold text-lg">{stack.name}</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {stack.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800/40 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-200"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + (stackIndex * 0.05) + (skillIndex * 0.05) }}
                      whileHover={{ scale: 1.05, backgroundColor: theme === "dark" ? "rgba(147, 51, 234, 0.2)" : "rgba(233, 213, 255, 1)" }}
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
          className="flex items-center justify-center gap-6 pt-16"
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
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-md hover:text-purple-600 dark:hover:text-purple-400 hover:shadow-lg transition-all duration-300"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
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
              className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            />
          </div>
          <span className="text-xs mt-2 text-gray-600 dark:text-gray-400">Scroll Down</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

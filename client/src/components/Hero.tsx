import { useTheme } from "../hooks/useTheme";
import { motion } from "framer-motion";

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-10" data-scroll-section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p 
              className="text-primary font-medium text-lg mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Aman <span className="text-primary">Jha</span>
            </motion.h1>
            
            <motion.h2 
              className={`text-xl md:text-2xl ${theme === "dark" ? "text-white/80" : "text-black/80"} mb-6`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Freelance <span className="text-primary font-medium">Software Developer</span>
            </motion.h2>
            
            <motion.p 
              className={`${theme === "dark" ? "text-white/70" : "text-black/70"} mb-8 max-w-md leading-relaxed`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              I build exceptional digital experiences with modern technologies, focusing on creating robust, scalable, and user-friendly applications.
            </motion.p>
            
            <motion.div 
              className="space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                data-scroll-to
              >
                Let's Talk <i className="fas fa-arrow-right ml-2"></i>
              </a>
              <a 
                href="#projects" 
                className="inline-block px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors"
                data-scroll-to
              >
                See My Work
              </a>
            </motion.div>
            
            <motion.div 
              className="mt-10 flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a 
                href="https://github.com/codingtravis-aman" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${theme === "dark" ? "text-white/70" : "text-black/70"} hover:text-primary transition-colors`}
                aria-label="GitHub"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a 
                href="https://www.instagram.com/codingtravis_aman/profilecard/?igsh=MXBsMmR6cWJjemU3Mg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${theme === "dark" ? "text-white/70" : "text-black/70"} hover:text-primary transition-colors`}
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="https://x.com/codingtravis_" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${theme === "dark" ? "text-white/70" : "text-black/70"} hover:text-primary transition-colors`}
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/aman-jha-0bb578211" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${theme === "dark" ? "text-white/70" : "text-black/70"} hover:text-primary transition-colors`}
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary p-1"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Aman Jha" 
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
              <motion.div 
                className={`absolute -bottom-4 -right-4 ${theme === "dark" ? "bg-gray-800" : "bg-white"} border border-primary rounded-lg px-4 py-2 shadow-lg`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="flex items-center text-primary">
                  <i className="fas fa-code mr-2"></i> <span className="font-mono">Software Developer</span>
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

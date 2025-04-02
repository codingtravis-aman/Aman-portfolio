import { useTheme } from "../hooks/useTheme";
import { motion } from "framer-motion";

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#hero" className="text-xl font-bold font-sans" data-scroll-to>
              <span className="text-primary">&lt;</span>
              <span className="text-white">Aman</span>
              <span className="text-primary">/&gt;</span>
            </a>
            <p className="text-white/70 mt-2">Freelance Software Developer</p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="https://github.com/codingtravis-aman" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a 
              href="https://www.instagram.com/codingtravis_aman/profilecard/?igsh=MXBsMmR6cWJjemU3Mg==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a 
              href="https://x.com/codingtravis_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/aman-jha-0bb578211" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-6 pt-6 text-center text-white/50 text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {currentYear} Aman Jha. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

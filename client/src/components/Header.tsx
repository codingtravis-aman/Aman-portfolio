import { useState, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full backdrop-blur-md z-50 transition-all duration-300 
        ${scrolled ? "py-2 shadow-md" : "py-4"}
        ${theme === "dark" ? "bg-black/80" : "bg-white/80"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <motion.a 
            href="#hero" 
            className="text-xl font-bold font-sans"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            data-scroll-to
          >
            <span className="text-primary">&lt;</span>
            <span className={theme === "dark" ? "text-white" : "text-black"}>Aman</span>
            <span className="text-primary">/&gt;</span>
          </motion.a>
          
          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a 
              href="#about" 
              className={`${theme === "dark" ? "text-white/80" : "text-black/80"} hover:text-primary transition-colors`}
              data-scroll-to
            >
              About
            </a>
            <a 
              href="#services" 
              className={`${theme === "dark" ? "text-white/80" : "text-black/80"} hover:text-primary transition-colors`}
              data-scroll-to
            >
              Services
            </a>
            <a 
              href="#projects" 
              className={`${theme === "dark" ? "text-white/80" : "text-black/80"} hover:text-primary transition-colors`}
              data-scroll-to
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className={`${theme === "dark" ? "text-white/80" : "text-black/80"} hover:text-primary transition-colors`}
              data-scroll-to
            >
              Contact
            </a>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
                ${theme === "dark" ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"}`}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="sun-icon"
                    className="flex items-center justify-center w-full h-full"
                    initial={{ rotate: -30, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 30, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-300">
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon-icon"
                    className="flex items-center justify-center w-full h-full"
                    initial={{ rotate: 30, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -30, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-primary"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <i className="fas fa-bars text-2xl"></i>
          </motion.button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className={`md:hidden ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-lg rounded-b-lg mx-4`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 p-4">
              <a 
                href="#about" 
                className={`${theme === "dark" ? "text-white/80" : "text-black/80"} hover:text-primary py-2 transition-colors`}
                onClick={closeMobileMenu}
                data-scroll-to
              >
                About
              </a>
              <a 
                href="#services" 
                className={`${theme === "dark" ? "text-white/80" : "text-black/80"} hover:text-primary py-2 transition-colors`}
                onClick={closeMobileMenu}
                data-scroll-to
              >
                Services
              </a>
              <a 
                href="#projects" 
                className={`${theme === "dark" ? "text-white/80" : "text-black/80"} hover:text-primary py-2 transition-colors`}
                onClick={closeMobileMenu}
                data-scroll-to
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className={`${theme === "dark" ? "text-white/80" : "text-black/80"} hover:text-primary py-2 transition-colors`}
                onClick={closeMobileMenu}
                data-scroll-to
              >
                Contact
              </a>
              
              {/* Mobile Theme Toggle */}
              <div className="flex items-center justify-between py-2">
                <span className={theme === "dark" ? "text-white/80" : "text-black/80"}>
                  {theme === "dark" ? "Dark" : "Light"} Mode
                </span>
                <button 
                  onClick={toggleTheme}
                  className={`w-12 h-6 rounded-full relative transition-colors
                    ${theme === "dark" ? "bg-gray-600" : "bg-gray-300"}`}
                  aria-label="Toggle theme"
                >
                  <motion.div 
                    className={`absolute flex items-center justify-center w-5 h-5 rounded-full top-0.5 text-xs transition-colors
                      ${theme === "dark" ? "bg-primary left-6" : "bg-white left-0.5"}`}
                    layout
                    transition={{ 
                      type: "spring",
                      stiffness: 700,
                      damping: 30
                    }}
                  >
                    {theme === "dark" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                      </svg>
                    )}
                  </motion.div>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

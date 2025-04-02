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
                ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <motion.i 
                  className="fas fa-sun text-yellow-400"
                  initial={{ rotate: -30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 30, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.i>
              ) : (
                <motion.i 
                  className="fas fa-moon text-gray-700"
                  initial={{ rotate: 30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -30, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.i>
              )}
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
                <span className={theme === "dark" ? "text-white/80" : "text-black/80"}>Theme</span>
                <button 
                  onClick={toggleTheme}
                  className={`w-12 h-6 rounded-full relative transition-colors
                    ${theme === "dark" ? "bg-gray-600" : "bg-gray-300"}`}
                  aria-label="Toggle theme"
                >
                  <motion.span 
                    className={`absolute w-5 h-5 rounded-full top-0.5 transition-colors
                      ${theme === "dark" ? "bg-primary left-6" : "bg-white left-0.5"}`}
                    layout
                    transition={{ 
                      type: "spring",
                      stiffness: 700,
                      damping: 30
                    }}
                  />
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

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "py-3 glassmorphism shadow-lg" : "py-5 bg-transparent"}
        `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <motion.a 
            href="#hero" 
            className="text-2xl font-bold relative z-10 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            data-scroll-to
          >
            <span className="text-primary text-3xl font-bold">&lt;</span>
            <span className="text-gradient group-hover:opacity-80 transition-opacity">Aman</span>
            <span className="text-primary text-3xl font-bold">/&gt;</span>
            <motion.span 
              className="absolute -bottom-1 left-0 bg-primary h-1 rounded-full" 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.a>
          
          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {[
              { name: "About", href: "#about" }, 
              { name: "Services", href: "#services" }, 
              { name: "Projects", href: "#projects" }, 
              { name: "Contact", href: "#contact" }
            ].map((item, index) => (
              <a 
                key={item.name}
                href={item.href} 
                className="relative group py-2 px-1 overflow-hidden"
                data-scroll-to
              >
                <motion.span 
                  initial={{ y: 0 }}
                  whileHover={{ y: -30 }}
                  transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                  className="inline-block"
                >
                  {item.name}
                </motion.span>
                <motion.span 
                  initial={{ y: 30 }}
                  whileHover={{ y: 0 }}
                  transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                  className="text-primary absolute left-1 top-2"
                >
                  {item.name}
                </motion.span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
            {/* Theme Toggle */}
            <motion.button 
              onClick={toggleTheme}
              className="w-12 h-6 rounded-full relative bg-gray-200 dark:bg-gray-700 flex items-center transition-colors duration-300 focus:outline-none shadow-md"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-6 h-6 relative rounded-full shadow-sm transform scale-90 flex items-center justify-center"
                animate={{
                  x: theme === "dark" ? 24 : 0,
                  backgroundColor: theme === "dark" ? "#6D28D9" : "#ffffff"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === "dark" ? (
                    <motion.svg
                      key="moon"
                      xmlns="http://www.w3.org/2000/svg" 
                      width="12" 
                      height="12" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="text-white"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"></path>
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="sun"
                      xmlns="http://www.w3.org/2000/svg" 
                      width="12" 
                      height="12" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="text-orange-400"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M12 2v2"></path>
                      <path d="M12 20v2"></path>
                      <path d="m4.93 4.93 1.41 1.41"></path>
                      <path d="m17.66 17.66 1.41 1.41"></path>
                      <path d="M2 12h2"></path>
                      <path d="M20 12h2"></path>
                      <path d="m6.34 17.66-1.41 1.41"></path>
                      <path d="m19.07 4.93-1.41 1.41"></path>
                    </motion.svg>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.button>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden flex flex-col space-y-1.5 relative z-10"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className={`block w-6 h-0.5 bg-primary rounded transition-all duration-300 ease-out 
                ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <motion.span 
              className={`block w-6 h-0.5 bg-primary rounded transition-all duration-300 ease-out 
                ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <motion.span 
              className={`block w-6 h-0.5 bg-primary rounded transition-all duration-300 ease-out 
                ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </motion.button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 glassmorphism"
            initial={{ clipPath: "circle(0% at top right)" }}
            animate={{ clipPath: "circle(150% at top right)" }}
            exit={{ clipPath: "circle(0% at top right)" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="h-full flex flex-col justify-center items-center space-y-8 p-8">
              <div className="absolute top-6 right-6">
                <button
                  onClick={closeMobileMenu}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                  aria-label="Close menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              <div className="mb-4 text-center">
                <motion.a 
                  href="#hero" 
                  className="text-2xl font-bold relative inline-block"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  data-scroll-to
                  onClick={closeMobileMenu}
                >
                  <span className="text-primary text-3xl font-bold">&lt;</span>
                  <span className="text-gradient">Aman</span>
                  <span className="text-primary text-3xl font-bold">/&gt;</span>
                </motion.a>
              </div>
              
              <div className="flex flex-col items-center space-y-6">
                {[
                  { name: "About", href: "#about" }, 
                  { name: "Services", href: "#services" }, 
                  { name: "Projects", href: "#projects" }, 
                  { name: "Contact", href: "#contact" }
                ].map((item, index) => (
                  <motion.a 
                    key={item.name}
                    href={item.href}
                    className="text-xl font-medium relative group"
                    onClick={closeMobileMenu}
                    data-scroll-to
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                ))}
              </div>
              
              {/* Mobile Theme Toggle */}
              <motion.div 
                className="flex items-center space-x-4 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {theme === "dark" ? "Dark" : "Light"} Mode
                </span>
                <button 
                  onClick={toggleTheme}
                  className="w-12 h-6 rounded-full relative bg-gray-200 dark:bg-gray-700 flex items-center transition-colors duration-300 focus:outline-none shadow-md"
                  aria-label="Toggle theme"
                >
                  <motion.div 
                    className="w-6 h-6 relative rounded-full shadow-sm transform scale-90 flex items-center justify-center"
                    animate={{
                      x: theme === "dark" ? 24 : 0,
                      backgroundColor: theme === "dark" ? "#6D28D9" : "#ffffff"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {theme === "dark" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"></path>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
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
                    )}
                  </motion.div>
                </button>
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                className="grid grid-cols-4 gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {[
                  { 
                    name: "GitHub", 
                    href: "https://github.com/codingtravis-aman", 
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    )
                  },
                  { 
                    name: "LinkedIn", 
                    href: "https://www.linkedin.com/in/aman-jha-0bb578211", 
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    )
                  }
                ].map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + (index * 0.1) }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

import { useEffect, useRef, createContext } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import { useToggleTheme } from "./hooks/useToggleTheme";

declare global {
  interface Window {
    LocomotiveScroll: any;
  }
}

// Create a theme context
export const ThemeContext = createContext<{
  theme: "light" | "dark";
  toggleTheme: () => void;
}>({
  theme: "dark",
  toggleTheme: () => console.log("Default toggle function"),
});

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useToggleTheme();

  useEffect(() => {
    // Initialize smooth scroll
    if (typeof window.LocomotiveScroll !== 'undefined') {
      const scroll = new window.LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: true,
        multiplier: 1,
      });

      // Clean up
      return () => {
        if (scroll) scroll.destroy();
      };
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div ref={scrollRef} data-scroll-container className={theme}>
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

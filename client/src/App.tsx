import { useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

declare global {
  interface Window {
    LocomotiveScroll: any;
  }
}

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <div ref={scrollRef} data-scroll-container>
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
  );
}

export default App;

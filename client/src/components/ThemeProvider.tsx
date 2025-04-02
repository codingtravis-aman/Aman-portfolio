import { createContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      // Check for saved theme
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
        return savedTheme as Theme;
      }
      
      // Check system preference
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    
    return "light";
  });

  useEffect(() => {
    console.log("Theme changed to:", theme); // For debugging
    
    // Update class on document element
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    
    // Save to localStorage
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      console.error("Failed to save theme to localStorage:", e);
    }
  }, [theme]);

  const toggleTheme = () => {
    console.log("Toggle theme clicked - current theme:", theme);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

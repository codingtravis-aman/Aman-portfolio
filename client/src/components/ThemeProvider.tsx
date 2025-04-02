import { createContext, useEffect, useState, ReactNode } from "react";

// Define theme types
type Theme = "light" | "dark";

// Define context type
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Create context with default values
const defaultContextValue: ThemeContextType = {
  theme: "light",
  toggleTheme: () => {
    console.log("Default toggle function");
  },
};

// Export context
export const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

// Theme provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Initialize theme state
  const [theme, setTheme] = useState<Theme>("dark");
  
  // Initialize theme on mount
  useEffect(() => {
    // Try to get saved theme from localStorage
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Apply theme changes to DOM
  useEffect(() => {
    console.log("Applying theme:", theme);
    
    // Update classList
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#ffffff";
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#121212";
    }
    
    // Save to localStorage
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("Failed to save theme to localStorage:", error);
    }
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      console.log(`Toggling theme from ${prevTheme} to ${newTheme}`);
      return newTheme;
    });
  };

  // Provide context value to children
  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

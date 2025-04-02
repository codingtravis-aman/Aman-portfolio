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
  toggleTheme: () => console.log("Default toggle function"),
};

// Export context
export const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

// Theme provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Initialize theme state with default dark theme
  const [theme, setTheme] = useState<Theme>("dark");
  
  // Initialize theme on mount - only once
  useEffect(() => {
    // Get theme from localStorage or use system preference
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme as Theme);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    
    // Apply initial theme
    applyTheme(savedTheme as Theme || "dark");
  }, []);
  
  // Function to apply theme to DOM
  const applyTheme = (theme: Theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  // Apply theme changes whenever theme state changes
  useEffect(() => {
    console.log("Applying theme:", theme);
    
    // Apply theme to DOM
    applyTheme(theme);
    
    // Save to localStorage
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("Failed to save theme to localStorage:", error);
    }
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      console.log(`Toggling theme from ${prevTheme} to ${newTheme}`);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

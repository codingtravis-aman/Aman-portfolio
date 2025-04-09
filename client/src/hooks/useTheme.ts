import { useContext } from "react";
import { ThemeContext } from "../App";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    console.error("useTheme must be used within a ThemeProvider");
    // Return a default context to prevent app crash
    return {
      theme: "dark",
      toggleTheme: () => console.log("Default toggle function")
    };
  }
  
  return context;
};

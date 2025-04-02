import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useToggleTheme = () => {
  // Initialize with dark theme
  const [theme, setTheme] = useState<Theme>('dark');

  // Initialize on mount
  useEffect(() => {
    // Check for stored theme preference
    const storedTheme = localStorage.getItem('theme') as Theme;
    
    if (storedTheme) {
      setTheme(storedTheme);
      applyTheme(storedTheme);
    } else {
      // Set default theme
      applyTheme('dark');
    }
  }, []);

  // Apply theme whenever it changes
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to apply theme to DOM
  const applyTheme = (newTheme: Theme) => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  };

  // Function to toggle theme
  const toggleTheme = () => {
    console.log(`Toggling theme from ${theme} to ${theme === 'dark' ? 'light' : 'dark'}`);
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
};
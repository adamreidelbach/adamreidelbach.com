import { useState, useEffect } from 'react';

const useDarkMode = () => {
  let initialTheme;
  if (typeof window !== 'undefined') {
    initialTheme = window.__theme;
  }
  const [localTheme, setDarkMode] = useState(initialTheme === 'dark');
  const [componentMounted, setComponentMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDarkMode(window.__theme);
      window.__onThemeChange = () => {
        setDarkMode(window.__theme);
      };
    }
    setComponentMounted(true);
  }, []);

  return [localTheme, componentMounted];
};

export default useDarkMode;

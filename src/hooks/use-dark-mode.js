import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [componentMounted, setComponentMounted] = useState(false);
  const userPrefersDarkTheme =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const setTheme = mode => {
    window.localStorage.setItem('darkMode', mode);
    setDarkMode(mode);
    document.body.classList.add(mode ? 'dark-mode' : 'light-mode');
    document.body.classList.remove(mode ? 'light-mode' : 'dark-mode');
  };

  const toggleDarkMode = () => {
    if (isDarkMode === false) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('darkMode');
    if (localTheme !== null) {
      setTheme(localTheme === 'true');
    } else if (userPrefersDarkTheme !== null) {
      setTheme(userPrefersDarkTheme);
    } else {
      setTheme(false);
    }
    setComponentMounted(true);
  }, [userPrefersDarkTheme]);

  return [isDarkMode, toggleDarkMode, componentMounted];
};

export default useDarkMode;

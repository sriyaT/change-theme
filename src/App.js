import React, { useState } from 'react';
import Layout from './layout';
import ThemeContext, { themes } from './theme-context';
import './App.css';
import ToggleButton from './toggleButton';

function App() {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };
  return (
    <ThemeContext.Provider value={theme}>
      <ToggleButton toggleTheme={toggleTheme} />
      <Layout />
    </ThemeContext.Provider>
  );
}

export default App;

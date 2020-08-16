import React from 'react';
export const themes = {
  dark: {
    color: 'white',
    background: 'rgb(93, 25, 67)',
    padding: '10px',
  },
  light: {
    color: 'white',
    background: 'black',
    padding: '10px',
  },
};
const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;

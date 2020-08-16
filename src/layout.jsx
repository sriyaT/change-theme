import React, { useContext } from 'react';
import ThemeContext from './theme-context';
import './layout.css';

const Layout = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={theme}>
      <div className='container'>
        <p>
          Click Toggle to change theme&nbsp;
          <span role='img' aria-label='emoji'>
            🤪
          </span>
        </p>
      </div>
    </div>
  );
};

export default Layout;

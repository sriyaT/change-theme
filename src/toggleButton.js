import React, { useState } from 'react';
import './toggleButton.css';

const ToggleButton = ({ toggleTheme }) => {
  const [color, setColor] = useState(false);
  console.log('color::', color);
  return (
    <>
      <input
        className='react-switch-checkbox'
        id={`react-switch-new`}
        type='checkbox'
        onClick={() => {
          toggleTheme();
          setColor((color) => !color);
        }}
      />
      <label
        className='react-switch-label'
        htmlFor={`react-switch-new`}
        style={{
          backgroundColor: color ? '#000' : 'rgb(93, 25, 67)',
          border: '1px solid rgb(93, 25, 67)',
        }}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default ToggleButton;

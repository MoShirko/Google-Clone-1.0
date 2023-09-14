import React, { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }


  const color = theme === 'light' ? '#202124' : '#FFF';
  const backgroundColor = theme === 'light' ? '#FFF' : '#202124';

  const buttonColor = theme === 'light' ? '#303134' : '#FFF';
  const buttonBackgroundColor = theme === 'light' ? '#F1F3F4' : '#303134';

 useEffect(()=> {
  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  if(document.body.getElementsByTagName('button')[0]){
    document.body.getElementsByTagName('button')[0].style.backgroundColor = buttonBackgroundColor;
    document.body.getElementsByTagName('button')[0].style.color = buttonColor;
  }
 
  if(document.body.getElementsByTagName('button')[1]){
    document.body.getElementsByTagName('button')[1].style.backgroundColor = buttonBackgroundColor;
    document.body.getElementsByTagName('button')[1].style.color = buttonColor;
  }


 })


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };

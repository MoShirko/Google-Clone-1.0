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
  const buttonBackgroundColor = theme === 'light' ? '#FFF' : '#303134';

 useEffect(()=> {
  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  const documentForm = document.getElementById('formId');
  const divForm = documentForm.getElementsByTagName('form');
  let formButtons = divForm[0].getElementsByTagName('button');
  formButtons = Array.prototype.slice.call(formButtons);
  formButtons.forEach( function(element){
      element.style.backgroundColor = buttonBackgroundColor;
      element.style.color = buttonColor; 

  });
 })


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };

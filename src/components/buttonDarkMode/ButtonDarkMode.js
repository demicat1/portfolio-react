import React, { useEffect } from 'react'
import { useLocalStorage } from '../../utils/useLocalStorage'
import detectDarkMode from '../../utils/detectDarkMode';

import sun from "../../img/icons/sun.svg"
import moon from "../../img/icons/moon.svg"

function ButtonDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme)
      });

  }, [setDarkMode])

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light'
    })
  }

  const btnNormal = 'dark-mode-btn'
  const btnDark = 'dark-mode-btn dark-mode-btn--active'

  return (
    <button className={darkMode === 'dark' ? btnDark : btnNormal} onClick={toggleDarkMode}>
      <img className="dark-mode-btn__icon" alt="light-mode-btn__icon" src={sun}></img>
      <img className="dark-mode-btn__icon" alt="dark-mode-btn__icon" src={moon}></img>
    </button>
  )
}

export default ButtonDarkMode
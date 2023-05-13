import { MoonIcon } from '@heroicons/react/solid'
import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'


const ThemeIcon = ():any => {
  const [darkMode, setDarkMode]  = useContext(ThemeContext)
  const toggleDarkMode = ():any=>{
    setDarkMode(!darkMode)
  }
  return (
    <button
    onClick={toggleDarkMode}
    className={`sm:top-8 top-27 absolute right-9 rounded-lg border-1 border-netural-400 p-2  xl:right-32 shadow-lg xl:top-26
    ${darkMode?
    "shadow-gray-800"
      :
      null
    }`}
    >
      <MoonIcon className={`h-8 w-8 cursor-pointer stroke-1 fill-none
      ${darkMode?
      "fill-yellow-400 stroke-yellow-400"
      :
      "fill none stroke-neutral-400"
      }`}/>
    </button>
  )
}

export default ThemeIcon

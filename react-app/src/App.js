import React from 'react';
import Meme from './components/WindowTracker'

export default function App() {
    const [darkMode, setDarkMode] = React.useState(true)

    function toggleDarkMode(){
        setDarkMode(!darkMode)
    }

    return(
        <div className='container'>
            <Meme darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
    )
  }
import React, {useContext, useState} from 'react';
import { ThemeContext } from './ThemeProvider';


const LocalThemedBox = () => {

    const [toggle, setToggle] = useState('Switch to dark theme');
    const {theme, setTheme} = useContext(ThemeContext);

    let local = () => {
        if(toggle === 'Switch to dark theme'){
            setTheme('dark');
            setToggle('Switch to light theme');
        } else {
            setTheme('light');
            setToggle('Switch to dark theme');
        }
    }

return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box">
        {/* Write code below this line */}
        <p id='local-themed-text-container'
            className={`txt-${theme}`}
        >
            Local Theme Text
        </p>

        <button
            id='local-theme-toggler'
            className={`btn btn-${theme}`}
            onClick={local}
        >
            {toggle}
        </button>
    </div>
)
}

export { LocalThemedBox }
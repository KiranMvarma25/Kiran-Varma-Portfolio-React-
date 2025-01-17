import { useState, useEffect } from 'react';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos;
            
            setPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
    };

    return (
        <div className={`Navbar ${visible ? '' : 'hidden'} ${darkMode ? 'dark-mode' : ''}`}>
          <div>
            <h3>Kiran Varma Maddhela</h3>
          </div>  
              
          <div className="NavbarChilds">
            <a href="#home"><p className="child">Home</p></a>
            <a href="#about"><p className="child">About</p></a>
            <a href="#skills"><p className="child">Skills</p></a>
            <a href="#certifications"><p className="child">Certifications</p></a>
            <a href="#projects"><p className="child">Projects</p></a>
            <a href="#contact"><p className="child">Contact Me</p></a>
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
                {darkMode ? <MdLightMode /> : <MdOutlineDarkMode />}
            </button>
          </div>
        </div>
    );
}

export default Navbar;
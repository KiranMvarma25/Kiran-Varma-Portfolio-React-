import { useState, useEffect } from 'react';

function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    
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

    return (
        <div className={`Navbar ${visible ? '' : 'hidden'}`}>
          
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
            <p><a className="resume" href="Kiran Varma-Resume.pdf">Resume</a></p>
          </div>

        </div>
    );
}

export default Navbar;
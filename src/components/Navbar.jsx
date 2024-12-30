function Navbar(){
    return (
      <div className="Navbar">
          
        <div>
          <h3>Kiran Varma Maddhela</h3>
        </div>  
            
        <div className="NavbarChilds">
          {/* <a href="#home"><p className="child">Home</p></a>
          <a href="#about"><p className="child">About</p></a>
          <p className="child">Skills</p>
          <p className="child">Certifications</p>
          <a href="#projects"><p className="child">Projects</p></a>
          <p className="child">Contact Me</p> */}
          <p><a className="resume" href="Kiran Varma-Resume.pdf">Resume</a></p>
        </div>

      </div>
    )
  }
  
  
  export default Navbar;
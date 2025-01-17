import { IoHandLeftOutline } from "react-icons/io5";
import { PiHandshake } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";

function About(){
    return (
      <div className="aboutParent">
        <h1 className="aboutHeading">About Me</h1>

        <div id="about" className="about">

          <div>
            <img className="KiranProfileImage" src="/kiran profile image.jpeg" alt="Kiran Vamea Profile Image" />
          </div>

          <div className="aboutPara">
            <h3>Heythere, <IoHandLeftOutline /> I'm Kiran Varma Maddhela an UnderGraduate who is passionate Software Development and Technologies. <FaLaptopCode /> I turn ideas into innovative web applications, from coding robust back-end systems to designing stunning user interfaces. <PiHandshake /> Let’s create the next big thing together!</h3>            
          </div>

        </div>
      </div>
    )
  }
  
  
  export default About;
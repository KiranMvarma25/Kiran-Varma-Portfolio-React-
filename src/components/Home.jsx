import { TbBrandLinkedin } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

function Home(){
    return (
      <div id="home" className="home">
        
        <div>
          <p className="logos"><a href="https://www.linkedin.com/in/kiran-varma-maddhela-1383a2264" target="_blank"><TbBrandLinkedin /></a></p>
          <p className="logos"><a href="https://github.com/KiranMvarma25" target="_blank"><FaGithub /></a></p>
          <p className="logos"><a href="https://leetcode.com/u/Kiran_Varma-M/" target="_blank"><SiLeetcode /></a></p>
          <p className="logos"><a href="mailto:mkiranvarma123@gmail.com" target="_blank"><MdOutlineEmail /></a></p>
          {/* <a href="https://www.linkedin.com/in/kiran-varma-maddhela-1383a2264" target="_blank"><img src="/linkedIn.webp" alt="Image of LinkedIn Logo" width="50px" height="50px" /></a> */}
          {/* <a href="https://github.com/KiranMvarma25" target="_blank"><img src="/github.png" alt="Image of GitHub Logo" width="50px" height="50px" /></a>
          <a href="mailto:mkiranvarma123@gmail.com" target="_blank"><img src="/mail.jpg" alt="Image of Email Logo" width="50px" height="50px" /></a> */}
        </div>
        
        <div>
          <h1>Hi, I'm</h1>
          <br />
          <h1>Kiran Varma Maddhela</h1>
          <br />
          <p>I'm a Full Stack Developer</p>
          <br />
          <p>Loves bringing ideas to life through code</p>
          <br />
        </div>

        <div>
          <img className="KiranImage" src="/kiran image.jpeg" alt="Image of Kiran Varma Maddhela" />
        </div>
      
      </div>
    )
  }
  
  
  export default Home;
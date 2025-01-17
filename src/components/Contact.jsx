import { TbBrandLinkedin } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

function Contact(){
    return (
        
        <div id="contact" className="contactParent">

            <div className="container">
                <h1 className="contactHeading">Contact</h1>
            </div>

        
                <div className="logoParent">
                    <p className="logo"><a href="https://www.linkedin.com/in/kiran-varma-maddhela-1383a2264" target="_blank"><TbBrandLinkedin /></a></p>
                    <p className="logo"><a href="https://github.com/KiranMvarma25" target="_blank"><FaGithub /></a></p>
                    <p className="logo"><a href="https://leetcode.com/u/Kiran_Varma-M/" target="_blank"><SiLeetcode /></a></p>
                    <p className="logo"><a href="mailto:mkiranvarma123@gmail.com" target="_blank"><MdOutlineEmail /></a></p>
                </div>
            
            <br />
            <br />
            <br />

            <div className="contact">

                <form>
                    
                    <input type="text" id="username" placeholder=" First Name" required />

                    <input type="text" id="lastname" placeholder=" Last Name" required />
                    
                    <br />

                    <input type="email" id="email" placeholder=" johndoe@gmail.com" required />

                    <input type="tel" id="phone" placeholder=" 123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />

                    <br />

                    <br />

                    <textarea id="message" cols="70" rows="10" placeholder="Message"></textarea>
                    
                    <br />

                    <button type="submit">Send</button>
                    <button type="reset">Reset</button>

                </form>

            </div>
            
        </div>

    )
}


export default Contact;
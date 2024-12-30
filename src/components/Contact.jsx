function Contact(){
    return (
        
        <div className="contactParent">

            <div className="container">
                <h1 className="contactHeading">Contact</h1>
            </div>

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
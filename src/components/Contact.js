import React, {useRef} from "react";
import emailjs from 'emailjs-com';
require('dotenv').config()

function Contact(props) {

    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const message = useRef()

    function sendMessage(){

        const template_params = {
            "reply_to": email.current.value,
            "from_name": `${firstName.current.value} ${lastName.current.value}`,
            "to_name": "Edmund",
            "message_html": message.current.value
         }

         emailjs.send(process.env.SERVICEID, process.env.TEMPLATEID, template_params);
    }

    return(
        <div>
            <main className="bg-img">
                <div className="container">
                    <div className="row main-row">
                        <div className="col-12 col-md-6 offset-md-6 col-xl-4 offset-xl-8  col-opacity">

                            <form className="card-opacity card-padding">
                                <h1>Get in Touch</h1>

                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <div className="form-row">
                                        <div className="col">
                                        <input type="text" className="form-control form-font" ref={firstName} placeholder="First name"/>
                                        </div>
                                        <div className="col">
                                        <input type="text" className="form-control form-font" ref={lastName} placeholder="Last name"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" className="form-control form-font" ref={email} placeholder="name@example.com"/>
                                </div>

                                <div className="form-group">
                                <label for="message">Message</label>
                                <textarea className="form-control form-font" ref={message} rows="3"></textarea>
                                </div>
                                <input type="submit" onClick={sendMessage} className="btn btn-primary form-font contact-button"/>
                            </form>

                        </div>
                    </div>
                
                </div>                
            </main>

            {/* Footer for each page may look the same but placement is actually different for responsiveness, thus didn't put in App.js */}
            <footer className="fixed-bottom footer">
                <div className="container">
                    <div className="col-12 col-md-6 offset-md-6 col-xl-4 offset-xl-8" >
                        (c) 2020 Edmund Wong
                    </div>
                </div>
            </footer>
        </div>
    )
        
}

export default Contact
import React from "react";


function Contact(props) {

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
                                        <input type="text" className="form-control form-font" id="firstname" placeholder="First name"/>
                                        </div>
                                        <div className="col">
                                        <input type="text" className="form-control form-font" id="lastname" placeholder="Last name"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" className="form-control form-font" id="email" placeholder="name@example.com"/>
                                </div>

                                <div className="form-group">
                                <label for="message">Message</label>
                                <textarea className="form-control form-font" id="message" rows="3"></textarea>
                                </div>
                                <input type="submit" id="submitmessage" className="btn btn-primary form-font contact-button"/>
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
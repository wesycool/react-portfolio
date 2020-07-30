import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {

    return(
        <div className="navbar navbar-expand-sm navbar-light bg-light">
            <Link to="/" className="navbar-brand">
                <img src="./Assets/Images/profile.jpg" width="35" height="35" className="d-inline-block align-top" alt="Edmund Wong" style={{borderRadius: "50px", marginRight: "3px"}}/>
                Edmund Wong
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{float: "right"}}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup"  style={{float: "right"}}>
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="./">About <span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to="./portfolio">Porfolio</Link>
                    <Link className="nav-item nav-link" to="./Assets/PDF/Edmund Wong, Cert. APM - Business Consultant.pdf" target="blank">Resume</Link>
                    <Link className="nav-item nav-link" to="./contact">Contact</Link>
                </div>
            </div>

        </div>

    )
        
}

export default NavBar;
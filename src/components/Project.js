import React from "react";

function Project(props) {

    return(
        <div className="row row-scroll">
            <div className="col-12 col-lg-6 col-xl-4 col-padding">
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-12'>
                        <a href="https://github.com/wesycool/Mobile-CasinoApp" target="_blank" role="button">
                        <i className="fab fa-github"></i> <span style={{fontSize: '10px'}}>https://github.com/wesycool/Mobile-CasinoApp</span></a>
                        <p></p>
                    </div>
                    <div className='col'>
                        <a href="https://wesycool-eat-da-burger.herokuapp.com/" target="_blank" role="button">
                        <i className="fas fa-link"></i> <span style={{fontSize: '10px'}}>https://wesycool-eat-da-burger.herokuapp.com/</span></a>
                    </div>
                </div>
                <div className="card card-design">
                    <a href="https://github.com/wesycool/Mobile-CasinoApp" target="_blank" role="button">
                    <img src="./Assets/Images/casinoapp.png" className="card-img-top card-img-design" alt="Casino App"/>
                    </a>
                    <p className="card-text card-text-design">Casino App</p>
                </div>
            </div>
        </div>
    
    )
}

export default Project;
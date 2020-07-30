import React from "react";

function Project({project}) {
    const {name,screenshot,github,link} = project

    return(
        <div className="col-12 col-lg-6 col-xl-4 col-padding">
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-12'>
                    <a href={github} target="_blank" role="button">
                    <i className="fab fa-github"></i> <span style={{fontSize: '10px'}}>{github}</span></a>
                </div>
                <div className='col' style={(link)? {display:"inline"} : {display:"none"}}>
                    <a href={link} target="_blank" role="button">
                    <i className="fas fa-link" style={(link === " ")? {color:'transparent'}:{}}></i> <span style={{fontSize: '10px'}}>{link}</span></a>
                </div>
            </div>
            <div className="card card-design">
                <a href={link || github} target="_blank" role="button">
                <img src={`./Assets/Images/${screenshot}`} className="card-img-top card-img-design" alt={name}/>
                </a>
                <p className="card-text card-text-design">{name}</p>
            </div>
        </div>
    )
}

export default Project;
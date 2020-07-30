import React, { useState } from "react";
import Project from "./Project";


function Portfolio(props) {
    const [ projectList, setList ] = useState( ["test"] )

    return(
        <div>
            <main className="bg-img">
                <div className="container main-opacity">
                    <div className="row">
                        <div className="col-12" style={{margin:'10px', textAlign:'center'}}>
                            <h1 className="card-title">My Portfolio</h1>
                        </div>
                    </div>

                    {Object.entries(projectList).map(([key,project]) => <Project key={key} project={project}/>)}                    

                </div>
            </main>
            
            {/* Footer for each page may look the same but placement is actually different for responsiveness, thus didn't put in App.js */}
            <footer className="fixed-bottom footer">
                <div className="container">
                    <div className="col-12">
                        (c) 2020 Edmund Wong
                    </div>
                </div>
            </footer>
        </div>
    )
        
}

export default Portfolio
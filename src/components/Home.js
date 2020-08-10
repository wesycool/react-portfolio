import React from "react";


function Home(props) {


    return(
        <div>
            <main className="bg-img">
                <div className="container">
                    <div className="row main-row">

                        <div className="col-12 col-md-6 col-xl-4 col-opacity">
                            <div className="card card-opacity">
                                <div className="card-body">
                                    <h1 className="card-title">about me</h1>
                                    <h6 className="card-subtitle mb-2 text-muted">I'm a Business Analyst and Process Consultant from Toronto.</h6>
                                    <p className="card-text"> I enjoy understanding the thought process of how things work. I also love learning game-changing technology trends and I'm currently into mobile/web development and data science.</p>
                                    <a href="https://www.linkedin.com/in/ed-wong-bpm"target="_blank" role="button">
                                        <div className="linkedin"></div></a>
                                    <a href="https://github.com/wesycool" target="_blank" role="button">
                                        <div className="github">
                                            <div className="github-mark"></div>
                                            <div className="github-logo"></div>
                                        </div></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </main>

            {/* Footer for each page may look the same but placement is actually different for responsiveness, thus didn't put in App.js */}
            <footer className="fixed-bottom footer">
                <div className="container">
                    <div className="col-12 col-md-6 col-xl-4">
                        (c) 2020 Edmund Wong
                    </div>
                </div>
            </footer>
        </div>
    )
        
}

export default Home
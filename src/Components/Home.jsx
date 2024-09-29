import React from "react";
import Navbar from './Navbar.jsx';

import OurServices from "./OurServices.jsx";

import Footer from "./Footer.jsx";

const Home = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <Navbar />
            <section id="demo" className="main d-grid align-items-center">
                <div className="container text-center">
                    <div className="logo-demo"></div>
                    <h1 className="demo-title me-3">DEMONSTRATE THE FUTURE</h1>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <button className="btn btn-demo me-3" onClick={() => scrollToSection('demo')}>DEMO EDU</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-demo me-3" onClick={() => scrollToSection('demo')}>DEMO EDU</button>
                        </li>
                        
                        <li className="nav-item">
                            <button className="btn btn-demo me-3" onClick={() => scrollToSection('social')}>DEMO MUSIC</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-demo me-3" onClick={() => scrollToSection('social')}>DEMO DJ</button>
                        </li>

                    </ul>
                    <p className="mt-4">Social media</p>
                </div>
            </section>
        
   
            <OurServices />

            <Footer />
            <div className="row" style={{position: 'fixed', bottom: "20px", right: "20px", zIndex: "100"}}>
                <div className="col-1">
                    <button className="btn btn-custom-demo" onClick={() => scrollToSection('demo')}>
                        <img src="/DEMOLogo.png" alt=""/>
                    </button>
                </div>
            </div>


            
            
            
        </>
    );
};

export default Home;

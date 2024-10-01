import React from "react";
import{Link} from 'react-router-dom'
import Navbar from './Navbar.jsx';

import OurServices from "./OurServices.jsx";
import Footer from "./Footer.jsx";

import DemoEDU from "./DemoEDU.jsx";
import DemoDEV from "./DemoDEV.jsx";
import DemoDRONE from "./DemoDRONE.jsx";
import DemoHOLO from "./DemoHOLO.jsx";
import DemoSPACE from "./DemoSPACE.jsx";
import DemoMETAVERSE from "./DemoMETAVERSE.jsx";

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
                <div className="container">
                    <div className="logo-demo"></div>
                    <h1 className="demo-title text-center me-3">DEMONSTRATE THE FUTURE</h1>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link me-3" onClick={() => scrollToSection('demo-edu')}>Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-3" onClick={() => scrollToSection('demo-dev')}>Software Development</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link me-3" onClick={() => scrollToSection('demo-drone')}>Drone</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-3" onClick={() => scrollToSection('demo-holo')}>Hologram</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-3" onClick={() => scrollToSection('demo-space')}>Space for Rent</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-3" onClick={() => scrollToSection('demo-metaverse')}>Metaverse</a>
                        </li>

                    </ul>
            
                    <h5 className="mt-3">Welcome to Demo Corporation where are High-end Technology converge to create groundbreaking solutions. Our extensive expertise in these fields fuels our passion for integrating cutting-edge technologies like the metaverse, AR, VR, and more with creative content.</h5>
                    <h5 className="mt-3">We specialize in crafting immersive experiences such as university workshop, software solutions, drone-based services, holographic displays, and metaverse events. Whether it’s a virtual concert, a futuristic fashion show, or a unique tourist attraction, we aim to transform everyday experiences and empower businesses to solve complex challenges with innovative technology. Join us in exploring new dimensions and redefining possibilities!</h5>

                    
                    
                </div>
            </section>
        
   
            <OurServices />
            <DemoEDU />
            <DemoDEV />
            <DemoDRONE />
            <DemoHOLO />
            <DemoSPACE />
            <DemoMETAVERSE />

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

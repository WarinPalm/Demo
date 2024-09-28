import React from "react";
import Navbar from './Navbar.jsx';

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
                            <a className="nav-link" onClick={() => scrollToSection('demo')}>DEMO EDU</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => scrollToSection('what-we-do')}>DEMO DEV</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => scrollToSection('our-clients')}>DEMO DRONE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => scrollToSection('social')}>DEMO HOLO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => scrollToSection('social')}>DEMO SPACE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => scrollToSection('social')}>DEMO GAME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => scrollToSection('social')}>DEMO MUSIC</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => scrollToSection('social')}>DEMO DJ</a>
                        </li>

                    </ul>
                    <p className="mt-4">Social media</p>

                </div>
                
            </section>
            <section id="what-we-do" className="main2 d-grid align-items-center">
                <div className="container text-center">
                    <h1 className="text-start">What We Do?</h1>
                    <p className="text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit repellat nulla id eveniet optio earum enim animi corporis mollitia quisquam at incidunt!</p>
                </div>
            </section>
            <section id="our-clients" className="main3 d-grid align-items-center">
                <div className="container text-center">
                    <h1 className="text-start">Our Clients</h1>
                    <p className="text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit repellat nulla id eveniet optio earum enim animi corporis mollitia quisquam at incidunt!</p>
                </div>
            </section>
            <section id="social" className="main4 d-grid align-items-center">
                <div className="container text-center">
                    <h1 className="text-start">Social</h1>
                    <p className="text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit repellat nulla id eveniet optio earum enim animi corporis mollitia quisquam at incidunt!</p>
                </div>
            </section>
            <footer id="contact-us" className="footer d-grid align-items-center ">
                    <div className="container text-center">
                        <h2>Contact us</h2>
                        <h2>demo@demo-corp.co</h2>
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => scrollToSection('demo')}>DEMONSTRATE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => scrollToSection('what-we-do')}>What We Do</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => scrollToSection('our-clients')}>Our Clients</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => scrollToSection('social')}>Social</a>
                            </li>
                        </ul>
                    </div>
            </footer>
        </>
    );
};

export default Home;

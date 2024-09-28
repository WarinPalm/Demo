import React from "react";

const Navbar = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div style={{ position: 'sticky', top: '0', zIndex: '100' }}>
            <nav className="navbar1">
                <div className="container nav-content mt-2">
                    <h1 style={{ color: "white" }}>DEMO</h1>
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
                        <li className="nav-item">
                            <button className="btn btn-light ms-3" onClick={() => scrollToSection('footer')}>Contact Us</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

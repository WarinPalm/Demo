import React from 'react'

function Footer() {
  return (
    <>
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
                    
                </ul>
            </div>
        </footer>
    </>
  )
}

export default Footer
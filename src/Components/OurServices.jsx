import React from 'react';

function OurServices() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>
      <section id="our-services" className="our-services d-grid align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h1>Our Services</h1>
            </div>
            <div className="col-8">
                <div className="row">
                    <div className="col-4 mb-4">
                        <div className="card card-hover" onClick={()=>scrollToSection('demo-edu')}>
                        <span class="material-symbols-outlined">school</span>
                            <h1 className='title-service'>DEMO EDU</h1>
                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <div className="card card-hover" onClick={()=>scrollToSection('demo-dev')}>
                        <span class="material-symbols-outlined">code</span>
                            <h1 className='title-service'>DEMO DEV</h1>
                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <div className="card card-hover" onClick={()=>scrollToSection('demo-drone')}>
                        <span class="material-symbols-outlined">sports_esports</span>
                            <h1 className='title-service'>DEMO DRONE</h1>
                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <div className="card card-hover" onClick={()=>scrollToSection('demo-holo')}>
                        <span class="material-symbols-outlined">view_in_ar</span>
                            <h1 className='title-service'>DEMO HOLO</h1>
                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <div className="card card-hover" onClick={()=>scrollToSection('demo-space')}>
                            <img src="/DEMOLogo.png" className="card-img-top" alt="demo" />
                            <h1 className='title-service'>DEMO SPACE </h1>
                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <div className="card card-hover" onClick={()=>scrollToSection('demo-metaverse')}>
                            <img src="/DEMOLogo.png" className="card-img-top" alt="demo" />
                            <h1 className='title-service'>DEMO METAVERSE</h1>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurServices;

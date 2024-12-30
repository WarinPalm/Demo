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
      <section id="our-services" className="our-services d-grid align-items-center scrolling-fixed">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 mb-4 text-center">
              <h1>Our Services</h1>
            </div>
            <div className="col-12 col-lg-8">
              <div className="row">
                {/* DEMO EDU */}
                <div className="col-6 col-md-6 col-lg-4 mb-4">
                  <div className="card card-hover" onClick={() => scrollToSection('demo-edu')}>
                    <img src="/DemoEdu.png" className="card-img-top img-fluid pt-4" alt="demo" />
                    <div className="card-body">
                      <h5 className="title-service text-center">DEMO EDU</h5>
                    </div>
                  </div>
                </div>
                {/* DEMO DEV */}
                <div className="col-6 col-md-6 col-lg-4 mb-4">
                  <div className="card card-hover" onClick={() => scrollToSection('demo-dev')}>
                    <img src="/DemoDev.png" className="card-img-top img-fluid pt-4" alt="demo" />
                    <div className="card-body">
                      <h5 className="title-service text-center">DEMO DEV</h5>
                    </div>
                  </div>
                </div>
                {/* DEV DRONE */}
                <div className="col-6 col-md-6 col-lg-4 mb-4">
                  <div className="card card-hover" onClick={() => scrollToSection('demo-drone')}>
                    <img src="/DemoDrone.png" className="card-img-top img-fluid pt-4" alt="demo" />
                    <div className="card-body">
                      <h5 className="title-service text-center">DEV DRONE</h5>
                    </div>
                  </div>
                </div>
                {/* DEMO HOLO */}
                <div className="col-6 col-md-6 col-lg-4 mb-4">
                  <div className="card card-hover" onClick={() => scrollToSection('demo-holo')}>
                    <img src="/DemoHolo.png" className="card-img-top img-fluid pt-4" alt="demo" />
                    <div className="card-body">
                      <h5 className="title-service text-center">DEMO HOLO</h5>
                    </div>
                  </div>
                </div>
                {/* DEMO SPACE */}
                <div className="col-6 col-md-6 col-lg-4 mb-4">
                  <div className="card card-hover" onClick={() => scrollToSection('demo-space')}>
                    <img src="/DemoSpace.png" className="card-img-top img-fluid pt-4" alt="demo" />
                    <div className="card-body">
                      <h5 className="title-service text-center">DEMO SPACE</h5>
                    </div>
                  </div>
                </div>
                {/* DEMO METAVERSE */}
                <div className="col-6 col-md-6 col-lg-4 mb-4">
                  <div className="card card-hover" onClick={() => scrollToSection('demo-metaverse')}>
                    <img src="/DemoMetaverse.png" className="card-img-top img-fluid pt-4" alt="demo" />
                    <div className="card-body">
                      <h5 className="title-service text-center">DEMO METAVERSE</h5>
                    </div>
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

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
      <section id="our-services" className="our-services d-grid align-items-center scrolling-fixed" >
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h1>Our Services</h1>
            </div>
            <div className="col-8">
                <div className="row">
                    <div className="col-4 mb-4">
                        <div className="card card-hover" onClick={()=>scrollToSection('demo-edu')}>
                            <img src="/DemoEdu.png" className="card-img-top img-fluid pt-4" alt="demo"/>
                            <div className="card-body">
                              <h5 className="title-service text-center">DEMO EDU</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <div className="card card-hover" onClick={()=>scrollToSection('demo-dev')}>
                            <img src="/DemoDev.png" className="card-img-top img-fluid pt-4" alt="demo"/>
                            <div className="card-body">
                              <h5 className="title-service text-center">DEMO DEV</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <div className="card card-hover" onClick={()=>scrollToSection('demo-drone')}>
                            <img src="/DemoDrone.png" className="card-img-top img-fluid pt-4" alt="demo"/>
                            <div className="card-body">
                              <h5 className="title-service text-center">DEV DRONE</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <div className="card card-hover" onClick={()=>scrollToSection('demo-holo')}>
                            <img src="/DemoHolo.png" className="card-img-top img-fluid pt-4" alt="demo"/>
                            <div className="card-body">
                              <h5 className="title-service text-center mt-3">DEMO HOLO</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <div className="card card-hover" onClick={()=>scrollToSection('demo-space')}>
                            <img src="/DemoSpace.png" className="card-img-top img-fluid pt-4" alt="demo"/>
                            <div className="card-body">
                              <h5 className="title-service text-center mt-3">DEMO SPACE</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <div className="card card-hover" onClick={()=>scrollToSection('demo-metaverse')}>
                            <img src="/DemoMetaverse.png" className="card-img-top img-fluid pt-4" alt="demo" />
                            <div className="card-body">
                              <h5 className="title-service text-center mt-3">DEMO METAVERSE</h5>
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

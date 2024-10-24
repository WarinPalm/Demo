import React, { useState } from "react";

function DemoDEV() {
  const [pageNumber, setPageNumber] = useState(1); // เริ่มต้นที่หน้าแรก

  // ฟังก์ชันสำหรับไปยังหน้าถัดไป
  const handleNext = () => {
    if (pageNumber < 3) {
      // สมมติว่ามี 3 หน้า
      setPageNumber(pageNumber + 1);
    }
  };

  // ฟังก์ชันสำหรับกลับไปยังหน้าก่อนหน้า
  const handlePrev = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <>
      <section id="demo-dev" className="demo-edu d-grid align-items-center scrolling-fixed" >
        <div className="container" >
          <div className="row align-items-center">
            <div className="col-12">
              {" "}
              {/* เนื้อหาแสดง content */}
              {/* pagenumber เท่ากับ 1 ให้แสดง */}
              {pageNumber === 1 && (
                <div className="row">
                  <div className="col-5" style={{ position: "relative" }}>
                    <div className="dev-logo"></div>
                    <div className="text-on-dev">
                      <span className="word">WHAT</span>
                      <span className="word">WE</span>
                      <span className="word">DO</span>
                    </div>
                  </div>
                  <div className="col-7">
                      <div className="card bg-transparent border border-light p-3">
                        <div className="card-body">
                          <hr style={{color:"white"}}/>
                          <div style={{color:"white", fontSize:"20px"}} className="card-text">
                          As a cutting-edge provider of digital development solutions, we specialize in creating immersive 2D and 3D Unity games that captivate audiences across platforms. Our expertise extends to crafting robust web applications, seamlessly blending functionality with user-centric design. We elevate our offerings by leveraging the power of blockchain technology, specifically deploying projects on the Internet Computer (ICP), including educational games, interactive simulations, scalable web solutions, and blockchain-integrated applications. Our team of skilled developers and designers has collaborated with both startups and established corporations.

By continuously staying at the forefront of emerging technologies, we ensure that our clients receive innovative solutions tailored to their unique needs. Our commitment to excellence and collaboration has earned us a reputation for delivering impactful results. As we move forward, we remain dedicated to pushing the boundaries of digital development and unlocking new possibilities for businesses and users alike.
                          </div>
                          <hr style={{color:"white"}} />
                        </div>
                      </div>
                  </div>
                  
                </div>
              )}
              {/* pagenumber เท่ากับ 2 ให้แสดง */}
              {pageNumber === 2 && (
                <div className="row" >
                  <div className="col">
                    <h1>Page 2: Demo Image</h1>
                  </div>
                  <div className="col w-50 w-clamp" >
                    <div style={{position:"relative", boxSizing:"border-box"}}>
                      <div className="row" >
                        <div className="p-1 col">
                          <img src="../../img/C346B7DC-EB48.JPEG" alt="Demo EDU Image" style={{width: "100%", height:"100%"}} />
                        </div>
                        <div className="p-1 col" >
                          <img src="../../img/181457_0.jpg" alt="Demo EDU Image" style={{width: "100%", height:"100%"}} />
                        </div>
                        
                      </div>
                      <div className="row " style={{display: "flex", justifyContent:"end"}}>
                        <span className="p-1 h-clamp" style={{width: "45%", position:"absolute", inset:"auto auto -10% 15%"}}>
                          <img src="../../img/IMG_0068.JPG" alt="Demo EDU Image" style={{width: "100%", height:"100%", objectFit:"cover", objectPosition:"center center"}} />
                        </span>
                        <span className="p-1" style={{width: "40%",  display: "flex", justifyContent:"end"}}>
                          <span>
                            <img src="../../img/IMG_1922.JPG" alt="Demo EDU Image" style={{width: "100%"}} />
                          </span>
                        </span>
                      </div>
                      
                      
                      <div style={{width:"40%",position: "absolute", zIndex: "100", inset:"35%"}}>
                        <div className="border border-black border-5">
                          <img src="../../img/IMG_9657.JPG" alt="Demo EDU Image" style={{width: "100%"}} />
                        </div>
                      </div>
                      <div style={{width:"25%",position: "absolute", zIndex: "100", bottom:"0", left:"-2%"}}>
                        <div className="border border-black border-5 ">  
                          <img src="../../img/IMG_3298.JPG" alt="Demo EDU Image" style={{width: "100%", height:"auto",objectFit:"cover", objectPosition:"center center"}} />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              )}
              {/* pagenumber เท่ากับ 3 ให้แสดง */}
              {pageNumber === 3 && (
                <div>
                  <h1>Page 3</h1>
                  <p>
                    On this page, you can explore additional information,
                    resources, or content related to Web3, Blockchain, and other
                    cutting-edge technologies.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ปุ่ม Prev */}
        <div className="nav-button prev-button">
          <i
            className="fa-solid fa-angles-left"
            onClick={handlePrev}
            style={{ cursor: 'pointer' }}
            disabled={pageNumber === 1}
          ></i>
        </div>

        {/* ปุ่ม Next */}
        <div className="nav-button next-button">
          <i
            className="fa-solid fa-angles-right"
            onClick={handleNext}
            style={{ cursor: 'pointer' }}
            disabled={pageNumber === 3}
          ></i>
        </div>

      </section>
    </>
  );
}

export default DemoDEV;

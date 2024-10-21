import React, { useState } from "react";

function DemoEDU() {
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
      <section id="demo-edu" className="demo-edu d-grid align-items-center scrolling-fixed" >
        <div className="container" >
          <div className="row align-items-center">
            <div className="col-12">
              {" "}
              {/* เนื้อหาแสดง content */}
              {/* pagenumber เท่ากับ 1 ให้แสดง */}
              {pageNumber === 1 && (
                <div>
                  <h1>Page 1: Demo EDU</h1>
                  <p className="test_p">
                    As a pioneering leader in Web3 education, we specialize in
                    providing comprehensive workshop on Blockchain fundamentals
                    and Web3, along with technical skills like coding and
                    building DApps. Our expertise also includes game development
                    and 2D/3D design, equipping learners with both creative and
                    technical skills. With experience training at over 20
                    universities nationwide and formal partnerships (MOUs) with
                    renowned institution. we have trained more than 2,000
                    students, reflecting the quality and trust in our programs.
                  </p>
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
          <button
            onClick={handlePrev}
            className="btn btn-secondary"
            disabled={pageNumber === 1}
          >
            Prev
          </button>
        </div>

        {/* ปุ่ม Next */}
        <div className="nav-button next-button">
          <button
            onClick={handleNext}
            className="btn btn-primary"
            disabled={pageNumber === 3}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
}

export default DemoEDU;

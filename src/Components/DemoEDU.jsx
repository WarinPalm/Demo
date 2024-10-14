import React, { useState } from 'react';

function DemoEDU() {
  const [pageNumber, setPageNumber] = useState(1); // เริ่มต้นที่หน้าแรก

  // ฟังก์ชันสำหรับไปยังหน้าถัดไป
  const handleNext = () => {
    if (pageNumber < 3) { // สมมติว่ามี 3 หน้า
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
      <section id="demo-edu" className="demo-edu d-grid align-items-center">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-12">
              {pageNumber === 1 && (
                <div>
                  <h1>Page 1: Demo EDU</h1>
                  <p>
                    As a pioneering leader in Web3 education, we specialize in providing comprehensive workshop on Blockchain fundamentals and Web3, along with technical skills like coding and building DApps.
                    Our expertise also includes game development and 2D/3D design, equipping learners with both creative and technical skills.
                    With experience training at over 20 universities nationwide and formal partnerships (MOUs) with renowned institution. we have trained more than 2,000 students, reflecting the quality and trust in our programs.
                  </p>
                </div>
              )}

              {pageNumber === 2 && (
                <div>
                  <h1>Page 2: Demo Image</h1>
                  <img
                    src="your-image-url-here"
                    alt="Demo EDU Image"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              )}

              {pageNumber === 3 && (
                <div>
                  <h1>Page 3</h1>
                  <p>
                    On this page, you can explore additional information, resources, or content related to Web3, Blockchain, and other cutting-edge technologies.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ปุ่ม Prev */}
        <div className="nav-button prev-button">
          <button onClick={handlePrev} className="btn btn-secondary" disabled={pageNumber === 1}>
            Prev
          </button>
        </div>

        {/* ปุ่ม Next */}
        <div className="nav-button next-button">
          <button onClick={handleNext} className="btn btn-primary" disabled={pageNumber === 3}>
            Next
          </button>
        </div>

      </section>
    </>
  );
}

export default DemoEDU;

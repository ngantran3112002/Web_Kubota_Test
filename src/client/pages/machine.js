import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
import "../css/machine.css";
import machineData from "./machineData";

const MachineEngineering = () => {
  return (
    <>
    <section>
      <div className="container overflow-hidden">
        <div className="row g-3 machine-row">
          {machineData.map( (machine) => {
            return (
              <div className="col-6" key={machine.id}>
                <div className="card">
                  <div className="img-wrap">
                    <img src={machine.image1} alt="" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{machine.name}</h5>
                    <p className="card-text">{machine.details1}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to = {`/machine/${machine.id}`} className="btn btn-primary btn-sm"> Xem thêm &rarr; </Link>
                  </div>
                </div>
              </div>
            )
          } )}
        </div>
      </div>
    </section> 
    {/* <section>  
      <div className="container">
          <div 
            className='col-sm-6 wow fadeInUp'
            style={{
              visibility: "visible",
              animationOnName: "fadeInUp",
              // width: "345",
              // height: "331",
              // paddingtop: "20",
            }}
          >
            <div className='news-info'>
              <a href="src/client/pages/machine" className='img_thum'>
                <img
                  className='img-responsive'
                  alt="MachineSlide"
                  src="http://phutungkubota.vn/Uploads/dc60-4.jpg"
                  style={{ width: "100%" }}
                />
              </a>
              <div className="single-content text-center hiii">
                  <a href="src/client/pages/machine">
                  Sơ đồ mạch điện máy gặt Kubota DC60
                  </a>
              </div>
            </div>
          </div>

          <div 
            className='col-sm-6 wow fadeInUp'
            style={{
              visibility: "visible",
              animationOnName: "fadeInUp",
              // width: "345",
              // height: "331",
              // paddingtop: "20",
            }}
          >
            <div className='news-info'>
              <a href="src/client/pages/machine" className='img_thum'>
                <img
                  className='img-responsive'
                  alt="MachineSlide"
                  src="http://phutungkubota.vn/Uploads/c%E1%BA%A7u%20chi%20b%C6%A1m%20nhi%C3%AAn%20li%E1%BB%87u%20nho.jpg"
                  style={{ width: "100%" }}
                />
              </a>
              <div className="single-content text-center hiii">
                  <a href="src/client/pages/machine">
                  Cách kiểm tra cầu chì để biết dây điện còn tốt hay Om thối...
                  </a>
              </div>
            </div>
          </div>
        
          <div 
            className='col-sm-6 wow fadeInUp'
            style={{
              visibility: "visible",
              animationOnName: "fadeInUp",
              // width: "345",
              // height: "331",
              // paddingtop: "20",
            }}
          >
            <div className='news-info'>
              <a href="src/client/pages/machine" className='img_thum'>
                <img
                  className='img-responsive'
                  alt="MachineSlide"
                  src="http://phutungkubota.vn/Uploads/dien%2070%201.jpg"
                  style={{ width: "100%" }}
                />
              </a>
              <div className="single-content text-center hiii">
                  <a href="src/client/pages/machine">
                  Sơ đồ mạch điện máy gặt Kubota DC70              
                  </a>
              </div>
            </div>
          </div>

          <div 
            className='col-sm-6 wow fadeInUp'
            style={{
              visibility: "visible",
              animationOnName: "fadeInUp",
              // width: "345",
              // height: "331",
              // paddingtop: "20",
            }}
          >
            <div className='news-info'>
              <a href="src/client/pages/machine" className='img_thum'>
                <img
                  className='img-responsive'
                  alt="MachineSlide"
                  src="http://phutungkubota.vn/Uploads/mac%20dien%20may%20gieo.jpg"
                  style={{ width: "100%" }}
                />
              </a>
              <div className="single-content text-center hiii">
                  <a href="src/client/pages/machine">
                  Sơ đồ mạch điện máy gieo hạt tự động Kubota SR-K800               
                  </a>
              </div>
            </div>
          </div>

          <div 
            className='col-sm-6 wow fadeInUp'
            style={{
              visibility: "visible",
              animationOnName: "fadeInUp",
              // width: "345",
              // height: "331",
              // paddingtop: "20",
            }}
          >
            <div className='news-info'>
              <a href="src/client/pages/machine" className='img_thum'>
                <img
                  className='img-responsive'
                  alt="MachineSlide"
                  src="http://phutungkubota.vn/Uploads/bang%20thiet%20bi%20M6040.jpg"
                  style={{ width: "100%" }}
                />
              </a>
              <div className="single-content text-center hiii">
                  <a href="src/client/pages/machine">
                  Sơ đồ mạch điện Máy kéo Kubota M6040            
                  </a>
              </div>
            </div>
          </div>

          <div 
            className='col-sm-6 wow fadeInUp'
            style={{
              visibility: "visible",
              animationOnName: "fadeInUp",
              // width: "345",
              // height: "331",
              // paddingtop: "20",
            }}
          >
            <div className='news-info'>
              <a href="src/client/pages/machine" className='img_thum'>
                <img
                  className='img-responsive'
                  alt="MachineSlide"
                  src="http://phutungkubota.vn/Uploads/Mach%20dien%20L4508-3.png"
                  style={{ width: "100%" }}
                />
              </a>
              <div className="single-content text-center hiii">
                  <a href="src/client/pages/machine">
                  Sơ đồ nguyên lý mạch điện máy Kéo Kubota L4508            
                  </a>
              </div>
            </div>
          </div>
      </div>
    </section> */}
    
    </>
  )
}

export default MachineEngineering;
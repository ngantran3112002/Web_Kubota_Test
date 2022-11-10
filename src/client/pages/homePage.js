import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap-grid.css";
import "../css/homePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from './product.js';
import {Routes, Route} from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <header
        style={{
          backgroundColor: "#fff",
          borderBottom: "solid 4px #009bff",
          marginTop: "0",
          zIndex: "999",
          width: "100%",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-2">
              <a
                className="logo"
                style={{
                  margin: "0",
                  padding: "0",
                  fontSize: "100%",
                  verticalAlign: "baseline",
                  background: "transparent",
                }}
                href="/src/client/pages"
              >
                <img
                  alt="logo"
                  src="http://phutungkubota.vn/images/logo.png?v=1"
                  style={{ maxHeight: "100px" }}
                />
              </a>
            </div>
            <div className="col-md-10 col-10">
              <div className="row top-head">
                <div className="col-md-6">
                  <div className="top-head">
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{
                        fontSize: "20px",
                        color: "#009bff",
                        marginRight: "10px",
                        marginTop: "10px",
                      }}
                    />
                    <div className="ct">
                      HOTLINE: 0398.490.986 - 0949.265.919
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <FontAwesomeIcon
                    icon={faMapMarked}
                    style={{
                      fontSize: "20px",
                      color: "#009bff",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <div className="ct">
                    <a href="https://g.page/KubotaBMP?share">
                      PHỤ TÙNG MÁY NÔNG NGHIỆP KUBOTA
                    </a>
                  </div>
                </div>
              </div>
              <div className="row mar-5">
                <div className="col-md-12 m-static">
                  <nav className="main-nav">
                    <ul>
                      <li>
                        <a className="smooth" href="/">
                          TRANG CHỦ
                        </a>
                      </li>
                      <li>
                        <a className="smooth" href="/product">
                          SẢN PHẤM
                        </a>
                      </li>
                      <li>
                        <a className="smooth" href="/src/client/pages">
                          GIỚI THIỆU
                        </a>
                      </li>
                      <li>
                        <a className="smooth" href="/src/client/pages">
                          KỸ THUẬT
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="top-item show-cart">
                    <div className="ct">
                      <a
                        id="cart"
                        href="/src/client/pages"
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        Giỏ hàng
                      </a>
                    </div>
                  </div>
                  <div className="top-item show-cart">
                    <div className="ct">
                      <a
                        id="cart"
                        href="/src/client/pages"
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        Đăng nhập
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/*<Carousel>*/}
      {/*  <Carousel.Item interval={1000}>*/}
      {/*    <img*/}
      {/*      className="d-block w-100"*/}
      {/*      alt="FirstSlide"*/}
      {/*      src="https://www.kubota.vn/UploadImages/home-page-banner.jpg"*/}
      {/*    />*/}
      {/*  </Carousel.Item>*/}
      {/*  <Carousel.Item interval={1000}>*/}
      {/*    <img*/}
      {/*      className="d-block w-100"*/}
      {/*      alt="secondSlide"*/}
      {/*      src="https://www.kubota.vn/UploadImages/home-page-banner.jpg"*/}
      {/*    />*/}
      {/*  </Carousel.Item>*/}
      {/*</Carousel>*/}
      {/*<div className="container">*/}
      {/*  <div row hotnews>*/}
      {/*    <h2*/}
      {/*      className="md-title wow fadeInDown"*/}
      {/*      style={{ visibility: "visible", animationOnName: "fadeInDown" }}*/}
      {/*    >*/}
      {/*      Tin Tức Mới*/}
      {/*    </h2>*/}
      {/*    <div className="row">*/}
      {/*      <div*/}
      {/*        className="col-sm-6 wow fadeInUp"*/}
      {/*        style={{ visibility: "visible", animationOnName: "fadeInUp" }}*/}
      {/*      >*/}
      {/*        <div className="news-info">*/}
      {/*          <a href="http://phutungkubota.vn/cach-kiem-tra-cau-chi-de-biet-day-dien-con-tot-hay-om-thoi.html">*/}
      {/*            <img*/}
      {/*              className="entry-thumbnail"*/}
      {/*              src="http://phutungkubota.vn/Uploads/c%E1%BA%A7u%20chi%20b%C6%A1m%20nhi%C3%AAn%20li%E1%BB%87u%20nho.jpg"*/}
      {/*              alt="Kiểm tra cầu trì"*/}
      {/*            />*/}
      {/*          </a>*/}
      {/*          <h3 className="title-news">*/}
      {/*            <a*/}
      {/*              href="http://phutungkubota.vn/cach-kiem-tra-cau-chi-de-biet-day-dien-con-tot-hay-om-thoi.html"*/}
      {/*              className="logo"*/}
      {/*            >*/}
      {/*              Cách kiểm tra cầu chì để biết dây điện còn tốt hay không*/}
      {/*            </a>*/}
      {/*          </h3>*/}
      {/*          <p className="text-news">*/}
      {/*            Thông số tiêu chuẩn cầu chì! Khi kiểm tra hệ thống dây điện*/}
      {/*            của máy gặt kubota...*/}
      {/*          </p>*/}
      {/*          <a*/}
      {/*            className="readMore"*/}
      {/*            href="http://phutungkubota.vn/cach-kiem-tra-cau-chi-de-biet-day-dien-con-tot-hay-om-thoi.html"*/}
      {/*          >*/}
      {/*            Xem thêm*/}
      {/*          </a>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div*/}
      {/*        className="col-sm-6 wow fadeInUp"*/}
      {/*        style={{ visibility: "visible", animationOnName: "fadeInUp" }}*/}
      {/*      >*/}
      {/*        <div className="news-info">*/}
      {/*          <a href="http://phutungkubota.vn/cach-kiem-tra-cau-chi-de-biet-day-dien-con-tot-hay-om-thoi.html">*/}
      {/*            <img*/}
      {/*              className="entry-thumbnail"*/}
      {/*              src="http://phutungkubota.vn/Uploads/dien%2070%201.jpg"*/}
      {/*              alt="Kiểm tra cầu trì"*/}
      {/*              style={{ width: "100%" }}*/}
      {/*            />*/}
      {/*          </a>*/}
      {/*          <h3 className="title-news">*/}
      {/*            <a href="http://phutungkubota.vn/cach-kiem-tra-cau-chi-de-biet-day-dien-con-tot-hay-om-thoi.html">*/}
      {/*              Cách kiểm tra cầu chì để biết dây điện còn tốt hay không*/}
      {/*            </a>*/}
      {/*          </h3>*/}
      {/*          <p className="text-news">*/}
      {/*            {" "}*/}
      {/*            Thông số tiêu chuẩn cầu chì! Khi kiểm tra hệ thống dây điện*/}
      {/*            của máy gặt kubota...{" "}*/}
      {/*          </p>*/}
      {/*          <a*/}
      {/*            className="readMore"*/}
      {/*            href="http://phutungkubota.vn/cach-kiem-tra-cau-chi-de-biet-day-dien-con-tot-hay-om-thoi.html"*/}
      {/*          >*/}
      {/*            Xem thêm*/}
      {/*          </a>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*  <div>*/}
          <Routes>
            <Route path="/product" element={<Product/>}/>
          </Routes>



      <footer>
        <div className="container text-center wow fadeInUp">

          <h3>PHỤ TÙNG MÁY NÔNG NGHIỆP CHÍNH HÃNG</h3>
          <div className="single-content">
            <p>
              Tổng kho số 1: Khu phố Phú Nghị, Phường Hòa Lợi, thị xã Bến Cát, tỉnh Bình Dương<br/>
              Tổng kho số 2: 558 Phố Mới, Phường Từ Sơn, Tỉnh Bắc Ninh
            </p>
            <p>
              Hotline: 0398.490.986 - 0949.265.919 &nbsp; - &nbsp;
              Email:phutungkubota.vn@gmail.com
            </p>

          </div>
        </div>
        <div className="foot">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
              </div>
              <div className="col-md-6 text-right">
                CÔNG TY TNHH KỸ THUẬT MÁY KTM<br/>
                Giấy phép kinh doanh số 2802799630 do Sở KHĐT T. Thanh Hóa cấp ngày 02/10/2019
              </div>
              <div className="col-md-2 text-right">
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;

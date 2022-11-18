import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/homePage.css";
import ProductList from "./productList/ProductList";

const HomePage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            alt="FirstSlide"
            src="https://wallpapercave.com/wp/wp7079153.jpg"
            style={{ height: '500px' }}
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            alt="secondSlide"
            src="https://www.americafem.com/wp-content/uploads/2022/03/L02Lanuch.jpg"
            style={{ height: '500px' }}
          />
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <div row hotnews>
          <h2
            className="md-title wow fadeInDown"
            style={{ visibility: "visible", animationOnName: "fadeInDown" }}
          >
            Tin Tức Mới
          </h2>
          <div className="row">
            <div
              className="col-sm-6 wow fadeInUp"
              style={{ visibility: "visible", animationOnName: "fadeInUp" }}
            >
              <div className="news-info">
                <a href="http://phutungkubota.vn/cach-kiem-tra-cau-chi-de-biet-day-dien-con-tot-hay-om-thoi.html">
                  <img
                    className="entry-thumbnail"
                    src="http://phutungkubota.vn/Uploads/c%E1%BA%A7u%20chi%20b%C6%A1m%20nhi%C3%AAn%20li%E1%BB%87u%20nho.jpg"
                    alt="Kiểm tra cầu trì"
                  />
                </a>
                <h3 className="title-news">
                  <a
                    href="http://phutungkubota.vn/cach-kiem-tra-cau-chi-de-biet-day-dien-con-tot-hay-om-thoi.html"
                    className="logo"
                  >
                    Cách kiểm tra cầu chì để biết dây điện còn tốt hay không
                  </a>
                </h3>
                <p className="text-news">
                  Thông số tiêu chuẩn cầu chì! Khi kiểm tra hệ thống dây điện
                  của máy gặt kubota...
                </p>
                <a
                  className="readMore"
                  href="http://phutungkubota.vn/cach-kiem-tra-cau-chi-de-biet-day-dien-con-tot-hay-om-thoi.html"
                >
                  Xem thêm
                </a>
              </div>
            </div>
            <div
              className="col-sm-6 wow fadeInUp"
              style={{ visibility: "visible", animationOnName: "fadeInUp" }}
            >
              <div className="news-info">
                <a href="http://phutungkubota.vn/cach-kiem-tra-cau-chi-de-biet-day-dien-con-tot-hay-om-thoi.html">
                  <img
                    className="entry-thumbnail"
                    src="http://phutungkubota.vn/Uploads/dien%2070%201.jpg"
                    alt="Kiểm tra cầu trì"
                    style={{ width: "100%" }}
                  />
                </a>
                <h3 className="title-news">
                  <a href="http://phutungkubota.vn/cach-kiem-tra-cau-chi-de-biet-day-dien-con-tot-hay-om-thoi.html">
                    Cách kiểm tra cầu chì để biết dây điện còn tốt hay không
                  </a>
                </h3>
                <p className="text-news">
                  {" "}
                  Thông số tiêu chuẩn cầu chì! Khi kiểm tra hệ thống dây điện
                  của máy gặt kubota...{" "}
                </p>
                <a
                  className="readMore"
                  href="http://phutungkubota.vn/cach-kiem-tra-cau-chi-de-biet-day-dien-con-tot-hay-om-thoi.html"
                >
                  Xem thêm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container text-center wow fadeInUp">
          <h3>PHỤ TÙNG MÁY NÔNG NGHIỆP CHÍNH HÃNG</h3>
          <div className="single-content">
            <p>
              Tổng kho số 1: Khu phố Phú Nghị, Phường Hòa Lợi, thị xã Bến Cát,
              tỉnh Bình Dương
              <br />
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
              <div className="col-md-4"></div>
              <div className="col-md-6 text-right">
                CÔNG TY TNHH KỸ THUẬT MÁY KTM
                <br />
                Giấy phép kinh doanh số 2802799630 do Sở KHĐT T. Thanh Hóa cấp
                ngày 02/10/2019
              </div>
              <div className="col-md-2 text-right"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

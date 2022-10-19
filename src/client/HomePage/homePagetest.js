import { makeStyles } from "@mui/styles";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.css"

const useStyle = makeStyles({
  topHeader: {
    textAlign: "justify",
    fontSize: "0",
  },
  topItem: {
    display: "inline-flex",
    marginTop: "10px",
    verticalAlign: "middle",
    fontSize: "16px",
    fontWeight: "300",
    color: "#23527c",
    lineHeight: "35px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  row: {
    marginRight: "-15px",
    marginLeft: "-15px",
  },
  phone: {
    display: "inline-block",
    lineHeight: "35px",
    marginLeft: "5px",
  },
  showCart: {
    display: "block !important",
    float: "right",
    width: "120px",
    background: "#23527c",
    color: "#fff",
    padding: "5px",
    textAlign: "center",
    fontSize: "20px",
    marginTop: "5px",
    marginLeft: "25px",
  },
  cart: {
    display: "inline-block",
    lineHeight: "35px",
    marginRight: "10px",
    color: '#fff',
  },
  navHeader: {
    float: "left",
  },
  li: {
    paddingRight: "70px",
  },
  smooth: {
    textDecoration: "none",
    color: '#000'
  },
});

const HeadHomePage = () => {
  const classes = useStyle();
  return (
    <header>
      <Container
        style={{
          paddingRight: "15px",
          paddingLeft: "15px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Row className={classes.row}>
          <Col xs={2} md={2}>
            <a href="/">
              <img
                alt="logo"
                src="http://phutungkubota.vn/images/logo.png?v=1"
                style={{ maxHeight: "100px" }}
              />
            </a>
          </Col>
          <Col xs={10} md={10}>
            <Row className={classes.topHeader}>
              <Col md={6}>
                <div className={classes.topItem}>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{
                      fontSize: "35px",
                      color: "#009bff",
                      marginRight: "10px",
                    }}
                  />
                  <div className={classes.phone}>
                    <a href="tel:0398490986" title>
                      0398.490.986 - 0949.265.919
                    </a>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className={classes.topItem}>
                  <FontAwesomeIcon
                    icon={faMapMarked}
                    style={{ fontSize: "35px", color: "#009bff" }}
                  />
                  <div className={classes.phone}>
                    PHỤ TÙNG MÁY NÔNG NGHIỆP KUBOTA
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <nav className={classes.navHeader}>
                  <ul
                    style={{
                      listStyle: "none",
                      marginTop: "20px",
                      display: "flex",
                    }}
                  >
                    <li className={classes.li}>
                      <a className={classes.smooth} href="/">
                        TRANG CHỦ
                      </a>
                    </li>
                    <li className={classes.li}>
                      <a className={classes.smooth} href="/">
                        SẢN PHẨM
                      </a>
                    </li>
                    <li className={classes.li}>
                      <a className={classes.smooth} href="/">
                        TRANG CHỦ
                      </a>
                    </li>
                    <li className={classes.li}>
                      <a className={classes.smooth} href="/">
                        TRANG CHỦ
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className={classes.showCart}>
                  <a className={classes.cart} href="/">
                    Giỏ hàng
                  </a>
                </div>
                <div className={classes.showCart}>
                  <a className={classes.cart} href="/">
                    Đăng nhập
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeadHomePage;

import React, { useContext, useEffect, useState } from "react";
import "./ProductDetail.css";
import {
  Avatar,
  Button,
  Divider,
  Form,
  Row,
  Col,
  Input,
  List,
  Rate,
  Image,
  Space,
  InputNumber,
} from "antd";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "antd/dist/antd.min.css";
import * as CurrencyFormat from "react-currency-format";
import { useParams } from "react-router-dom";
import { Context } from "../../context";
import { LoadingContext } from "react-router-loading";
import axios from "axios";
import { value } from "lodash/seq";

const ProductDetail = () => {
  const context = useContext(Context);
  const loadingContext = useContext(LoadingContext);

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  const [cardItem, setcardItem] = useState(1);
  // const handleChange = event => {
  //     let { value, min, max } = event.target;
  //     value = Math.max(Number(min), Math.min(Number(max), Number(cardItem)));
  //
  //     this.setState({ cardItem });
  // };
  const handleDecrease = async () => {
    setQuantity(quantity - 1);
  };
  const handleIncrease = async () => {
    setQuantity(quantity + 1);
  };

  // const prouctId = useParams();

  const fetchProductData = async () => {
    console.log(productId);
    return await axios.get(
      `http://localhost:3001/api/products/detail/:id/${productId}`
    );
  };

  useEffect(() => {
    fetchProductData()
      .then((productDataCall) => {
        setProduct(productDataCall.data);
        console.log(productDataCall.data);
      })
      .catch((err) => console.log(err))
      .finally(() => loadingContext.done());
  }, []); // <-- mảng rỗng để chỉ chạy 1 lần ở khởi tạo

  //chưa làm hàm addToCart => sử dụng setCartList từ context, VD mẫu tử file index.jsx của productList

  let CurrencyFormat = require("react-currency-format");
  const [loading, setLoading] = useState(false);
  const onButtonClick = (e) => {
    setLoading(true);
    setTimeout(() => {
      const callback = { quantity: quantity };
      context.addToCart(product, callback);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Row style={{ marginTop: 40 }} gutter={200}>
        <Col span={10} align="right" style={{ paddingRight: 0 }}>
          <Image id="productImage" src={product.image} />
        </Col>
        <Col
          span={12}
          align="left"
          style={{ paddingLeft: 50, paddingRight: 250 }}
        >
          <Space direction="vertical" align={"start"}>
            {/*<div className="col-12 col-lg-5 mt-5">*/}
            <h2>{product.name}</h2>

            <Rate defaultValue={4} allowHalf count={5} />

            <span id="no_of_reviews">(5 reviews)</span>
            <hr />
            <p>{product.description}</p>
            <Divider style={{ borderColor: "black" }} />
            <CurrencyFormat
              style={{ fontSize: "30px", color: "red" }}
              value={product.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"đ "}
            />
            <div className="flex VrhRS0" style={{ display: "flex" }}>
              <label className="_34CHXV">Deal Sốc</label>
              <div className="_3-CbwQ">Mua để nhận quà</div>
            </div>
            <div
              className="flex tprdAj pN+gd-"
              style={{ display: "flex", marginBottom: "20px" }}
            >
              <label className="c27oHv">Vận chuyển</label>
              <div className="FpxUz+ TKcfnJ">
                <div className="qUe3y7">
                  <div className="C-UCH-" style={{ marginLeft: "40px" }}>
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/1cdd37339544d858f4d0ade5723cd477.png"
                      width="25"
                      height="15"
                      className="k0LUJt"
                    />
                    Miễn phí vận chuyển
                  </div>
                </div>
              </div>
            </div>
            <div className="stockCounter d-inline"></div>
            <p>Số lượng</p>
            <Space block="true" size={0}>
              <Button
                type="default"
                size="middle"
                onClick={() => {
                  handleDecrease();
                }}
                disabled={quantity - 1 === 0}

                // value={"+"}
              >
                -
              </Button>
              <InputNumber
                // min={1}
                // max={10}
                size="default"
                defaultValue={quantity}
                value={quantity}
                disabled={
                  quantity - 1 === 0 || quantity + 1 > product.quantityInStock
                }
                // style={{ width: 80 }}
              />
              <Button
                type="default"
                size="default"
                onClick={() => {
                  handleIncrease();
                }}
                disabled={quantity + 1 > product.quantityInStock}
              >
                +
              </Button>
              <Divider style={{ borderColor: "white" }} />
            </Space>
            <Button
              loading={loading}
              icon={<AiOutlineShoppingCart />}
              class="btn btn-tinted btn--l vQ3lCI _8ULUF3"
              onClick={onButtonClick}
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                width: "217px",
                height: "46px",
                color: "red",
                backgroundColor: "rgba(208,1,27,0.08)",
                borderColor: "red",
              }}
            >
              Thêm vào giỏ hàng
            </Button>
          </Space>
        </Col>
      </Row>
      <Divider style={{ borderColor: "gray" }} />
    </>
  );
};
export default ProductDetail;

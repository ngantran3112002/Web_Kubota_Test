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

  const data = [
    {
      title: "Ant Design Title 1",
      description:
        " Sản phẩm chất lượng, chính hãng, giá tốt! Shop xử lý đơn và giao hàng nhanh! Sẽ tiếp tục ủng hộ Shop ở những đơn hàng sau!!!ihwrfureihgpqqqqqqqqqqqqqqqqqqqqqqqqsssssssssdcndsjunfcwdnfcifwnfc",
    },
    {
      title: "Ant Design Title 2",
      description:
        " Hàng chính hãng. Đóng gói kỹ càng. Chất lượng tốt. Mua sale nên rẻ hơn bên ngoài khá nhiều. Giao hàng tận nhà nên đỡ công đi lại...i chdddddddddddddddd hfiq3jfiehrcu2e nwih uhfiu2griehruhfu3rfuhergyfgrgurftuewhf724y rciryurh utuewgut83ugfy45turhfur3gurg73rgfuyrgfuwgf87hf",
    },
    {
      title: "Ant Design Title 3",
      description: "Giao hành nhanh chất lượng tốt đáng mua",
    },
    {
      title: "Ant Design Title 4",
      description: "hihihihihi",
    },
  ];
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

  //lấy data product từ backend
  /*  // Data mẫu
          productId	1
          name	"SP - FAKE1"
          description	"khong co mo ta"
          categoryId	1
          quantityInStock	2
          price	"100000"
          discountId	0
          image	"none"
          createdAt	"2022-11-27T08:00:54.000Z"
          updatedAt	"2022-11-27T08:00:54.000Z"
      * */
  const fetchProductData = async () => {
    console.log(productId)
    return await axios.get(`http://localhost:5000/api/products/detail/${productId}`);
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
      // const callback = {quantity: quantity }
      // context.addToCart(product, callback)
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Row style={{ marginTop: 40 }} gutter={200}>
        <Col span={10} align="right" style={{ paddingRight: 0 }}>
          <Image
            id="productImage"
            src="http://phutungkubota.vn/Uploads/20976f702965e13bb874-1.jpg"
          />
        </Col>
        <Col
          span={12}
          align="left"
          style={{ paddingLeft: 50, paddingRight: 250 }}
        >
          <Space direction="vertical" align={"start"}>
            {/*<div className="col-12 col-lg-5 mt-5">*/}
            <h2>HỘP CẦU CHÌ MÁY GẶT MÁY KÉO</h2>

            <Rate defaultValue={4} allowHalf count={5} />

            <span id="no_of_reviews">(5 reviews)</span>
            <hr />
            <p>
              Write powerful product descriptions quickly with this easy to
              follow template and fill in the blank options to ensure you
              convert visitors into customers.
            </p>
            <Divider style={{ borderColor: "black" }} />
            <CurrencyFormat
              style={{ fontSize: "30px", color: "red" }}
              value={10000}
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
                disabled={quantity - 1 === 0 || quantity + 1 > 10}
                // style={{ width: 80 }}
              />
              <Button
                type="default"
                size="default"
                onClick={() => {
                  handleIncrease();
                }}
                disabled={quantity + 1 > 10}
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
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </>
  );
};
export default ProductDetail;

import React, {  } from "react";
import { ReactDOM } from "react";
import "../index.css";
import 'antd/dist/antd.min.css';
import { Pagination, Card, List, Image, Button, Empty} from "antd";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

const GridView = ({
  product,
  currentPage,
  totalPage,
  loadingState,
  onPageChange,
  addToCart,
}) => {



  return (
    <List
    loading={loadingState}
    size={"small"}
    className={"ant-row-List"}
    itemLayout="verticle"
    grid={{ gutter: 0, column: 1, xs: 1, sm: 1, md: 1, lg: 2, xl: 3, xxl: 3 }}
    dataSource={product}
    footer={
      <Pagination
        style={{ textAlignLast: "center", borderColor: "green" }}
        pageSize={9}
        defaultCurrent={1}
        current={currentPage}
        responsive={true}
        total={totalPage}
        onChange={(page, newPageSize) => {
          onPageChange(page);
            
        }}
      ></Pagination>
    }
    renderItem={(item) => (
      <List.Item>
        <Card
          loading = {loadingState}
          style={{ width: "100%", borderRadius: "8" }}
          className="card-item-custom"
          hoverable
        // cover={<img alt="example" src="https://via.placeholder.com/1000"/>}
        >
          <div className="list-child">
            <Image
              style={{ maxWidth: "100%", height: "300px", objectFit: "fill" }}
              alt="example"
              src="https://joeschmoe.io/api/v1/random"
              // src="https://via.placeholder.com/1000"
              preview={false}
            />
            <div className="ant-body-child-content">
              <Link className="name" to={`/products/details/${item.productId}`}>
                {item.name}
              </Link>
              <CurrencyFormat
                value={item.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"đ"}
                renderText={(value) => <p className="price">{value}</p>}
              />
              <Button value={item} type="primary" onClick={e => {
                addToCart(item)
              }}>Thêm vào giỏ hàng</Button>
            </div>
          </div>
        </Card>
      </List.Item>
    )}
  />
  )
}
  

export default GridView;

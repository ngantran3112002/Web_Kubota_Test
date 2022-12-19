import React from "react";
// import "../index.css";
import "./listView.css";
import "antd/dist/antd.min.css";

import { Button, Image, List, Pagination, Space } from "antd";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";

const ListView = ({
  products,
  loadingStatus,
  currentPage,
  totalPage,
  onPageChange,
  addToCart,
}) => {
  return (
    <List
      loading={loadingStatus}
      itemLayout="horizontal"
      id="ListContainer"
      dataSource={products}
      style={{ height: "10%", fontSize: "30px" }}
      footer={
        <Pagination
          style={{ textAlignLast: "center", borderColor: "green" }}
          pageSize={9}
          defaultCurrent={1}
          current={currentPage}
          responsive={true}
          total={totalPage}
          onChange={(page) => {
            onPageChange(page);
          }}
        ></Pagination>
      }
      renderItem={(item) => (
        <List.Item className="listItem">
          {/*<Space align="start">*/}
          <Space
            align="start"
            style={{ width: "80%", height: "100%" }}
            size="large"
          >
            <Space.Compact className="listCompact" block={true} size="large">
              <Image
                className="listImage"
                src={item.image}
                // src="https://via.placeholder.com/1000"
                // src="https://picsum.photos/seed/picsum/300/300"
              />
              <Space
                direction="vertical"
                align={"start"}
                wrap={true}
                id="listItemMiddle"
              >
                <Link
                  className="name"
                  to={`/products/details/${item.id}`}
                >
                  {item.name}
                </Link>
                <p>{item.description}</p>
              </Space>
            </Space.Compact>
          </Space>

          <Space
            align={"start"}
            style={{
              height: "100%",
              width: "20%",
            }}
            size={"middle"}
          >
            <div style={{ width: "100%" }}>
              <CurrencyFormat
                value={item.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"đ "}
                renderText={(value) => <p className="price">{value}</p>}
              />
              <Button
                value={item}
                type="primary"
                onClick={() => {
                  addToCart(item);
                }}
                size="large"
              >
                Thêm vào giỏ hàng
              </Button>
            </div>
          </Space>
          {/*</Space>*/}
        </List.Item>
      )}
    />
  );
};

export default ListView;

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import {
  useParams,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import "antd/dist/antd.css";
import { Pagination, List, Image, Row, Col } from "antd";
import axios from "axios";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";

const ListView = ({
  product,
  loadingState,
  currentPage,
  totalPage,
  onPageChange,
}) => {
  return (
    <List
      loading={loadingState}
      itemLayout="horizontal"
      id="ListContainer"
      dataSource={product}
      style={{ height: "10%", fontSize: "30px" }}
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
        <List.Item className="listItem">
          <List.Item.Meta
            style={{ maxWidth: "80%" }}
            avatar={
              <Image
                style={{ width: 300, height: 300 }}
                src="https://joeschmoe.io/api/v1/random"
              />
            }
            title={
              <Link
                // style={}
                className="name"
                to={`/products/details/${item.productId}`}
              >
                {item.name}
              </Link>
            }
            description={item.description}
          />
          <div style={{ width: "20%" }}>
            <CurrencyFormat
              value={item.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"đ "}
              renderText={(value) => <p className="price">{value}</p>}
            />
          </div>
        </List.Item>
      )}
    />
  );
};

export default ListView;

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
import { Pagination, Card, List, Image } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

const GridView = ({
  product,
  currentPage,
  totalPage,
  loadingState,
  onPageChange,
}) => (
  <List
    loading={loadingState ? true : false}
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
          //   setParams({ page: page });
          //   setLoading(true);
          console.log("pag grid ", loadingState);
          // window.location.reload();
        }}
      ></Pagination>
    }
    renderItem={(item) => (
      <List.Item>
        <Card
          style={{ width: "100%", borderRadius: 8 }}
          className="card-item-custom"
          hoverable
          // cover={<img alt="example" src="https://via.placeholder.com/1000"/>}
        >
          <div className="list-child">
            <Image
              style={{ width: "100%", borderRadius: 8 }}
              alt="example"
              src="https://via.placeholder.com/1000"
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
            </div>
          </div>
        </Card>
      </List.Item>
    )}
  />
);

export default GridView;

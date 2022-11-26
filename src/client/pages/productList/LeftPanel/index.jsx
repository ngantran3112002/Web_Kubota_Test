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
const LeftPanel = ({ category }) => {
  return (
    <>
      <Row>
        <List
          size="small"
          bordered
          style={{ margin: 24, borderRadius: "8px 0px 0px 0px" }}
          // id = "category"
          dataSource={category}
          header={
            <div>
              <strong>DANH MỤC</strong>
            </div>
          }
          renderItem={(item) => (
            <List.Item>
              <Link to={`/products/category/${item.id}`} onClick={() => {}}>
                {item.name}
              </Link>
            </List.Item>
          )}
        />
      </Row>
      <Row style={{ margin: 24, borderRadius: 8 }}>
        <List
          header={
            <div>
              <strong>DỊCH VỤ VÀ CAM KẾT</strong>
            </div>
          }
          bordered
          style={{ borderRadius: 8 }}
        >
          <List.Item>Free Ship</List.Item>
          <List.Item>Uy tín 100%</List.Item>
          <List.Item>Cam kết chất lượng</List.Item>
          <List.Item>Chúc bạn mua hàng vui vẻ</List.Item>
        </List>
      </Row>
    </>
  );
};

export default LeftPanel;

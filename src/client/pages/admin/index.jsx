import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import { Table, Breadcrumb, Menu, Row, Col, Modal, Typography } from "antd";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import * as queryString from "query-string";
import AdminOrder from "./orders";
import AdminProduct from "./products";

const { Title, Text } = Typography;

export default function AdminPage() {
  


  const items = [
    { label: (<Link to="/admin/orders">Đơn hàng</Link>), key: "1" },
    { label: (<Link to="/admin/products">Sản phẩm</Link>), key: "2" }, // remember to pass the key prop
  ];

  

  const location = useLocation()
  console.log(location)

  return (
    <>
      {/* <Breadcrumb>
        <Breadcrumb.Item menu={{ items }}>Ant Design</Breadcrumb.Item>
       </Breadcrumb> */}
      <Row>
        <Col style={{ width: "20%" }}>
          <Menu items={items} />
        </Col>
        <Col justify="space-around" align="end" style={{ width: "80%" }}>
          {location.pathname === "/admin/orders"? <AdminOrder /> : <AdminProduct /> }
        </Col>
      </Row>
    </>
  );
}

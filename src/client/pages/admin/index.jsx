import * as React from "react";
import { useState, useEffect } from "react";
// import { listProduct } from "./ListProductAdmin";
import axios from "axios";
import _ from 'lodash';
import { Table, Breadcrumb, Menu, Row, Col, Modal, Typography} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import * as queryString from "query-string";

const {Title, Text} = Typography

export default function AdminPage() {
  const [orders, setOrders] = useState([{}]);
  const [displayedOrders, setDisplayedOrders] = useState([{}]);
  const [isEdit, setIsEdit] = useState(false);
  const [orderDetail, setOrderDetail] = useState([{}]);

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilter] = useState({});
  const currentSearchParams = useLocation();


  const orderDetailItemsCol = [
    {
      // key: 'id',
      title: "Mã sản phẩm",
      dataIndex: 'productId', 
    },
    {
      // key: 'id',
      title: "Tên",
      dataIndex: 'productName',
    },
    {
      // key: 'id',
      title: "Mã đơn hàng",
      dataIndex: 'orderId',
    },
  ]


  const items = [
    { label: "item 1", key: "item-1" }, // remember to pass the key prop
    { label: "item 2", key: "item-2" },
  ];

  useEffect(() => {
    axios.get("http://localhost:5000/orders/alltest/test").then((res) => {
      setOrders(
        res.data.rows.map((row) => ({
          id: row.id,
          user_id: row.user_id,
          status: row.status.toString(),
          createdAt: row.createdAt,
        }))
      );

      setDisplayedOrders(orders);
      setLoading(false);
      console.log(res.data.rows);
    });
  }, []);


  const fetchOrderDetails = async (id) => {
    setLoading(true);
    await axios
      .get(`http://localhost:5000/orders/${id}`)
      .then((res) => {
      

        setOrderDetail(
          res.data.flatMap((items) => ({
            productId: items.id,
            productName: items.name,
            orderId: items.orders.map(orderItem => orderItem.id)
          })));
      })
      .finally(() => {
        setLoading(false)
        setIsEdit(true)
      });
  };

  useEffect(() => {
    setDisplayedOrders(orders);
  }, [orders]);



  const columns = [
    {
      // key: 'id',
      title: "Mã đơn",
      dataIndex: "id",
    },
    {
      // key: 'user_id',
      title: "Mã khác hàng",
      dataIndex: "user_id",
    },
    {
      // key: 'status',
      title: "Trạng thái đơn hàng",
      dataIndex: "status",
      filters: [
        {
          text: "đang giao",
          value: true,
        },
        {
          text: "chờ xét duyệt",
          value: false,
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
    {
      // key: 'status',
      title: "Ngày tạo đơn",
      dataIndex: "createdAt",
      sorter: (record1, record2) => {
        return record1.createdAt > record2.createdAt;
      },
    },
    {
      key: "action",
      title: "Actions",
      render: (text, record, index) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                fetchOrderDetails(record.id);
              }}
            />
            <DeleteOutlined
              onClick={(text, record, index) => {
                onDeleteOrder(text, record, index);
              }}
              style={{ color: "red", marginLeft: "12px" }}
            />
          </>
        );
      },
    },
  ];

  const onDeleteOrder = (text, record, index) => {
    console.log(index);
  };
  console.log(orderDetail);

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
          <Table
            pagination={
              //   {
              //   current: currentPage,
              //   onchange: (page) => {
              //     onPageChange(page)
              //   }
              // }
              true
            }
            loading={loading}
            columns={columns}
            filters={true}
            dataSource={displayedOrders}
          ></Table>
          <Modal
            title="Chỉnh sửa đơn hàng"
            visible={isEdit}
            okText="Lưu"
            onCancel={() => {
              setIsEdit(false);
            }}
            onOk={() => {
              setIsEdit(false);
            }}
          >
            <Typography>
            <Title>Đơn Hàng</Title>
            <Table 
              dataSource={orderDetail} 
              columns={orderDetailItemsCol}
              pagination={false}
            />
            </Typography>

          </Modal>
        </Col>
      </Row>
    </>
  );
}

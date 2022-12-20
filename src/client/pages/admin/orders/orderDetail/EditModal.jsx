import {
  Table,
  Modal,
  Typography,
  Select,
} from "antd";
import { useState } from "react";
import "./admin.css";

const { Title, Text } = Typography;
const orderDetailItemsCol = [
  {
    // key: 'id',
    title: "Mã sản phẩm",
    dataIndex: "productId",
  },
  {
    // key: 'id',
    title: "Tên",
    dataIndex: "productName",
  },
  {
    // key: 'id',
    title: "số lượng",
    dataIndex: "quantity",
  },
  {
    // key: 'id',
    title: "giá trên 1 sản phẩm",
    dataIndex: "priceEach",
    render: (item) => (
      <Text>
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(item)}
      </Text>
    ),
  },
  {
    // key: 'id',
    title: "tổng",
    dataIndex: "total",
    render: (item) => (
      <Text>
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(item)}
      </Text>
    ),
  },
];

const statusOption = [
  {
    value: "đang được giao",
    label: "đang được giao",
  },
  {
    value: "đã được giao",
    label: "đã được giao",
  },
  {
    value: "chờ xét duyệt",
    label: "chờ xét duyệt",
  },
  {
    value: "hủy",
    label: "hủy",
  },
];

const dropDownOptions = [
  { label: "item 1", key: "item-1" }, // remember to pass the key prop
  { label: "item 2", key: "item-2" },
];

const EditModal = ({
  isEdit,
  setIsEdit,
  orderDetail,
  record,
  changeStatus,
}) => {
  const [editedStatus, setEditedStatus] = useState(record.status);
  console.log(orderDetail)
  // console.log(record)
  const handleChange = (value) => {
    if (value != editedStatus) {
      setEditedStatus(value);
    }
  };
  return (
    <Modal
      title="Chỉnh sửa đơn hàng"
      visible={isEdit}
      okText="Lưu"
      width={1200}
      onCancel={() => {
        setIsEdit(false);
      }}
      onOk={() => {
        changeStatus(editedStatus, record.id);
      }}
    >
      <Typography>ngày tạo đơn: {record.createdAt}</Typography>
      <Title level={4}>Ghi chú</Title>
      <Typography>{record.note}</Typography>
      <Title level={4}>Trạng thái đơn hàng</Title>
      <Select
        defaultValue={record.status}
        style={{
          width: "180px",
        }}
        onChange={handleChange}
        options={statusOption}
      />
      <Table
        bordered
        title={() => (
          <Title level={4} style={{ paddingLeft: "0px" }}>
            Các sản phẩm
          </Title>
        )}
        dataSource={orderDetail}
        columns={orderDetailItemsCol}
        pagination={false}
        summary={(pageData) => {
          let orderTotal = 0;
          pageData.forEach(({ total }) => {
            orderTotal += parseInt(total);
          });

          return (
            <>
              <Table.Summary fixed>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0}>
                    <Text strong>Tổng giá trị đơn hàng</Text>
                  </Table.Summary.Cell>
                  <Table.Summary.Cell colSpan={4} align={"right"}>
                    <Text strong style={{ align: "right" }} type="danger">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(orderTotal)}
                    </Text>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            </>
          );
        }}
      />
    </Modal>
  );
};

export default EditModal;

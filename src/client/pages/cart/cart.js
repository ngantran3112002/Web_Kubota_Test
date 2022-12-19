import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../../context";
import { Space, Table, Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
const Cart = () => {
  const cartContex = useContext(Context);
  const navigate = useNavigate();
  console.log("cartContex: ", cartContex);
  const cartLists = cartContex.cartList;
  const [rowData, setRowData] = useState([]);
  const [productQuantity, setProductQuantity] = useState(0);
  const searchInput = useRef(null);
  const [moneySumAll, setMoneySumAll] = useState(0);
  const [totalProductQuantity, setTotalProductQuantity] = useState(0);
  const [orderDetailDataJson, setOrderDetailDataJson] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
  };

  const handleReset = (clearFilters) => {
    clearFilters();
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => text,
  });

  const sharedOnCell = (_, index) => {
    if (index === "sum") {
      return {
        colSpan: 2,
      };
    }
    return {};
  };

  const onChangeProductQuantity = (event) => {
    setProductQuantity(event.target.value);
    console.log("productQuan: ", productQuantity);
  };

  const handleClickPayConfirm = async (event) => {
    event.preventDefault();
    navigate("/CheckOut", { replace: true });
  };

  const head = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      onCell: sharedOnCell,
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 3,
      },
      ...getColumnSearchProps("id"),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Đơn giá",
      dataIndex: "price",
      key: "price",
      sorter: {
        compare: (a, b) => a.price - b.price,
        multiple: 3,
      },
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      onCell: sharedOnCell,
    },
    {
      title: "Thành tiền",
      dataIndex: "money",
      key: "money",
      sorter: {
        compare: (a, b) => a.money - b.money,
        multiple: 3,
      },
    },
  ];

  useEffect(() => {
    const dataRow = [];
    let allMoney = 0;
    let totalProduct = 0;
    cartLists.forEach((product, index) => {
      setProductQuantity(product.quantity);
      let indexI = "incrementor" + index;
      const val = parseInt(document.getElementById(indexI)?.value);
      const moneySum = product.obj.price * val;
      allMoney += moneySum;
      dataRow.push({
        key: index,
        id: product.obj.id,
        name: product.obj.name,
        price: new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(product.obj.price),
        quantity: (
          <>
            <input
              type="number"
              step="1"
              id={indexI}
              min="0"
              defaultValue={product.quantity}
              onChange={onChangeProductQuantity}
            />
          </>
        ),
        money: moneySum
          ? new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(moneySum)
          : new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.obj.price * productQuantity),
      });
      if (cartContex.cartList[index].quantity !== val) {
        cartContex.cartList[index].quantity = val;
      }
      totalProduct += product.quantity;
    });

    console.log("moneySumAll: ", allMoney);
    setMoneySumAll(allMoney);
    setTotalProductQuantity(totalProduct);
    cartContex.cartList.money = allMoney;
    cartContex.cartList.totalProduct = totalProductQuantity;
    setRowData(dataRow);
  }, [productQuantity]);

  useEffect(() => {
    const orderDetail = [];
    rowData.forEach((product, index) => {
      let indexI = "incrementor" + index;
      const productQuantity = parseInt(document.getElementById(indexI)?.value);
      orderDetail.push({
        product_id: product.id,
        quantity: productQuantity,
        priceEach: product.price,
      });
    });
    const data = {
      user_id: cartContex.user?.userInfo?.id,
      total: cartContex.cartList.totalProduct,
    };
    data.orderDetails = orderDetail;

    setOrderDetailDataJson(JSON.stringify(data));
    cartContex.order = orderDetailDataJson;
  }, [rowData]);

  return (
    <div className="container">
      <div className="tableCart">
        <Table columns={head} dataSource={rowData} />
      </div>
      <div className="payment">
        <h1>Thanh toán</h1>
        <div>
          <div
            className="sumMoney"
            style={{
              display: "flex",
              justifyContent: "space-around",
              borderBottom: "1px dotted",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <h4>Tổng tiền</h4>
            <h5>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(moneySumAll)}
            </h5>
          </div>
          <div
            className="payConfirm"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <button
              onClick={handleClickPayConfirm}
              style={{
                backgroundColor: "beige",
                borderRadius: "10%",
                padding: 15,
              }}
            >
              Xác thực thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

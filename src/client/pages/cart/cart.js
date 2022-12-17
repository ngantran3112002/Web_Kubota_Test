import React, { useContext, useEffect, useState, useRef } from "react";
import { CartContext } from "../../context";
import { Space, Table, Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const Cart = () => {
  const cartContex = useContext(CartContext);
  const cartLists = cartContex.cartList;
  const [rowData, setRowData] = useState([]);
  const [productQuantity, setProductQuantity] = useState(0);
  const searchInput = useRef(null);
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

    console.log("productQUna: ", productQuantity);
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
      sorter: {
        compare: (a, b) => a.quantity - b.quantity,
        multiple: 3,
      },
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
    let moneySumAll = 0;
    const dataRow = [];
    cartLists.forEach((product, index) => {
      setProductQuantity(product.quantity);
      const moneySum = product.obj.price * product.quantity;
      moneySumAll += moneySum;
      let indexI = "incrementor" + index;
      dataRow.push({
        key: index,
        id: product.obj.id,
        name: product.obj.name,
        price: product.obj.price,
        // quantity: product.quantity,
        quantity: (
          <>
            <input
              type="number"
              step="1"
              id={indexI}
              min="0"
              value={productQuantity}
              onChange={() => {
                product.quantity += 1;
              }}
            />
          </>
        ),
        money: moneySum,
      });
    });
    // dataRow.push({
    //   //   key: "sum",
    //   id: "Tổng tiền",
    //   //   name: "",
    //   //   price: "",
    //   //   quantity: "",
    //   name: moneySumAll,
    // });

    console.log("moneySumAll: ", moneySumAll);
    setRowData(dataRow);
  }, [cartLists, productQuantity]);

  return (
    <div className="container">
      <div className="tableCart">
        <Table columns={head} dataSource={rowData} />
      </div>
      <div className="payment"></div>
    </div>
  );
};

export default Cart;

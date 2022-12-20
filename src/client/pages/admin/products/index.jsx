import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Input, Popconfirm, Table, notification } from "antd";
import axios from "axios";
import { LoadingContext } from "react-router-loading";
const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};
const App = () => {
  const [dataSource, setDataSource] = useState([]);
  const loadingContext = useContext(LoadingContext);
  const [autoComplete, setAutoComplete] = useState([{}]);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const openNotification = (message) => {};

  const [count, setCount] = useState(2);
  const handleDelete = async (key, productId) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
    // await axios
    //   .delete(`http://localhost:3001/api/products/detail/${productId}`)
    //   .then((response) => console.log("Delete successful"));
    notification.open({
      message: "Thông báo",
      description: "Xóa sản phẩm thành công",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products/alltest")
      .then(async (allData) => {
        const autoCmpData = allData.data.allProducts.map((item) => {
          return { value: item.name, label: item.name, ...item };
        });
        setAutoComplete(autoCmpData);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoadingStatus(false);
      });
  }, []);

  useEffect(() => {
    const dataRow = [];
    autoComplete.forEach((product, index) => {
      dataRow.push({
        key: index,
        id: product.id,
        name: product.name,
        description: product.description,
        price: Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(product.price),
        quantityInStock: product.quantityInStock,
      });
    });
    setDataSource(dataRow);
  }, [autoComplete]);
  console.log("autoComplete: ", autoComplete);
  const defaultColumns = [
    {
      title: "id",
      dataIndex: "id",
      editable: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "30%",
      editable: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      width: "30%",
      editable: true,
    },
    {
      title: "Quantity In Stock",
      dataIndex: "quantityInStock",
      editable: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key, record.id)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];
  const handleAdd = () => {
    const newData = {
      key: count,
      id: "new Id",
      name: "Sản phẩm mới",
      description: "Mô tả sản phầm mới",
      quantityInStock: "Hàng tồn kho",
      price: "Giá sản phẩm mới",
    };
    setDataSource([...dataSource, newData]);
    notification.open({
      message: "Thông báo",
      description: "Thêm sản phẩm vào cuối bảng thành công",
    });
  };
  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  return (
    <div>
      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Thêm sản phẩm
      </Button>
      <Table
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};
export default App;

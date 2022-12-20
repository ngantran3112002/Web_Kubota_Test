import {
    Table,
    Modal,
    Typography,
    Select,
  } from "antd";
import { useForm } from "rc-field-form";
  import { useState } from "react";
import { Form } from "react-router-dom";
  
  const { Title, Text } = Typography;

  
  
  
  
  const AddProduct = ({
    isAdding,
    setIsAdding,
    handleAdd,
    // form
  }) => {
    const val = {}
    const [form] = useForm()
    // // console.log(record)
    // const handleChange = (value) => {
    //   if (value != editedStatus) {
    //     setEditedStatus(value);
    //   }
    // };
    return (
      <Modal
        title="Chỉnh sửa đơn hàng"
        visible={isAdding}
        okText="Lưu"
        // width={1200}
        onCancel={() => {
          setIsAdding(false);
        }}
        onOk={() => {
          console.log("ok")
          // handleAdd(val);
        }}
      >
        <Form  onFinish={handleAdd}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Form>
      </Modal>
    );
  };
  
  export default AddProduct;
  
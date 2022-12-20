import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/CheckOut.css";
import { Context } from "../context";
import { Alert, Button, notification, Space, Table } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import * as _ from "lodash";
import { BASE_URL } from "../../apiConfig";
import { SmileOutlined } from "@ant-design/icons";

const CheckOut = () => {
  let context = useContext(Context);
  const userContext = context.user;
  const cartContex = context.cartList;
  const [note, setNote] = useState("");
  const [dataRow, setDataRow] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const token = userContext.token ? userContext.token : "";

  const navigate = useNavigate();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const [email, setEmail] = useState("");
  const [name, setName] = useState(
    userContext ? userContext.userInfo?.userName : ""
  );
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(
    userContext ? userContext.userInfo?.address : ""
  );

  const handleOnChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMessageChange = (event) => {
    // 👇️ access textarea value
    setNote(event.target.value);
    // console.log(event.target.value);
  };

  const handleOk = () => {
    setIsModalOpen(!isModalOpen);
    navigate("/login", { replace: true });
  };

  const handleCancel = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClickOrder = async (_body, _config) => {
    // console.log(_body)
    setIsLoading(true);
    await axios
      .post(`${BASE_URL}/api/orders/add/create`, { _body, note: note }, _config)
      .then((res) => {
        notification.open({
          message: "Thông báo",
          description: `Đặt hàng thành công`,
          icon: (
            <SmileOutlined
              style={{
                color: "#108ee9",
              }}
            />
          ),
        });
        cartContex.splice(0);
      })
      .catch((err) => console.warn(err));
    setIsLoading(false);
    navigate("/introduction", { replace: true });
  };

  const head = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Đơn giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Thành tiền",
      dataIndex: "money",
      key: "money",
    },
  ];
  useEffect(() => {
    const row = [];
    cartContex.forEach((product, index) => {
      const moneySum = product.obj.price * product.quantity;
      row.push({
        key: index,
        id: product.obj.id,
        name: product.obj.name,
        price: Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(product.obj.price),
        quantity: product.quantity,
        money: Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(moneySum),
      });
    });
    row.push({
      key: "sumAllMoney",
      name: "Tổng tiền",
      money: Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(cartContex.money),
    });
    setDataRow(row);
    console.log("dataRowJson: ", context);
  }, [cartContex]);

  return (
    <div className="row">
      <div className="container-checkout">
        <div className="col-md-7">
          <div className="card-checkout">
            <div className="card-checkout-header">
              <h5>NHẬP THÔNG TIN KHÁCH HÀNG</h5>
            </div>
            <div className="card-checkout-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group mb-6">
                    <label> Họ và Tên</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      defaultValue={
                        userContext ? userContext.userInfo?.userName : ""
                      }
                      value={name}
                      onChange={(e) => handleOnChange(e, setName)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label> Số điện thoại</label>
                    <input
                      type="number"
                      name="phone"
                      className="form-control"
                      defaultValue={
                        userContext ? userContext.userInfo?.phone : ""
                      }
                      value={phone}
                      onChange={(e) => handleOnChange(e, setPhone)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label> Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      defaultValue={
                        userContext ? userContext.userInfo?.email : ""
                      }
                      value={email}
                      onChange={(e) => handleOnChange(e, setEmail)}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mb-3">
                    <label> Địa chỉ</label>
                    <textarea
                      rows="3"
                      name="address"
                      className="form-control"
                      defaultValue={
                        userContext ? userContext.userInfo?.address : ""
                      }
                      value={address}
                      onChange={(e) => handleOnChange(e, setAddress)}
                    ></textarea>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group mb-3">
                    <label> Ghi chú</label>
                    <textarea
                      rows="3"
                      name="message"
                      value={note}
                      onChange={handleMessageChange}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-5 container-productscreen">
        <div>
          <h5>CHI TIẾT ĐƠN HÀNG</h5>
        </div>
        <Table columns={head} dataSource={dataRow} />
        <div>
          <h6>HÌNH THỨC THANH TOÁN</h6>

          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label for="html">Thanh toán khi nhận hàng (COD) </label>
        </div>
        <div className="col-md-12">
          <div className="form-group text-end">
            <button
              type="button"
              className="btn btn-primary mx-1"
              onClick={() => handleClickOrder(context.order, config)}
              disabled={!token}
            >
              Đặt hàng
            </button>
            {!token && (
              <Modal
                title="Yêu cầu đăng nhập"
                open={!isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <p>Hãy đăng nhập để đặt hàng</p>
              </Modal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

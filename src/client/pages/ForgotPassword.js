import { FrownOutlined, SmileOutlined } from "@ant-design/icons";
import { Alert, Input, Button, notification, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import axios from "axios";
import { BASE_URL } from "../../apiConfig";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPwd, setConfirmNewPwd] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const [warmingPassword, setWarningPassword] = useState(null);
  const [wrongFormatPassword, setWrongFormatPassword] = React.useState(null);
  const [statusCode, setStatusCode] = useState(null);
  const [checkAll, setCheckAll] = useState(null);

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const navigate = useNavigate();
  const handleChangeValue = (event, setValueFunction) => {
    setValueFunction(event.target.value);
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const submitForm = async (e) => {
    await axios
      .post(
        `${BASE_URL}/api/users/changePassword`,
        {
          email: email,
          password: newPassword,
        },
        config
      )
      .then((res) => {
        const key = `open${Date.now()}`;
        const btn = (
          <Space>
            <Button
              type="primary"
              size="small"
              onClick={() => {
                navigate("/login", { replace: true });
                notification.destroy(key);
              }}
            >
              Đi tới đăng nhập
            </Button>
          </Space>
        );
        !warmingPassword &&
          checkAll &&
          api.open({
            message: "Thông báo",
            description: "Thay đổi mật khẩu thành công",
            btn,
            key,
            icon: (
              <SmileOutlined
                style={{
                  color: "#108ee9",
                }}
              />
            ),
          });
        !checkAll &&
          notification.open({
            message: "Thông báo",
            description: `Thay đổi mật khẩu không thành công. Vui lòng điền đầy đủ thông tin`,
            icon: (
              <FrownOutlined
                style={{
                  color: "red",
                }}
              />
            ),
          });
      })
      .catch((err) => setStatusCode(err.response.status));
    statusCode === 400 &&
      notification.open({
        message: "Thông báo",
        description: "Thay đổi mật khẩu thất bại",
        icon: (
          <FrownOutlined
            style={{
              color: "red",
            }}
          />
        ),
      });
  };

  useEffect(() => {
    if (newPassword !== confirmNewPwd) setWarningPassword(true);
    else setWarningPassword(false);
  }, [newPassword, confirmNewPwd]);

  useEffect(() => {
    if (!validateEmail(email)) setWrongFormatPassword(true);
    else setWrongFormatPassword(false);
  }, [email]);

  useEffect(() => {
    if (!email || !newPassword || !oldPassword) setCheckAll(false);
    else setCheckAll(true);
  }, [email, newPassword, oldPassword]);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: 450,
        marginTop: 30,
      }}
    >
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Thay đổi mật khẩu
      </h2>
      <form onSubmit={(e) => submitForm}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label for="email">
            <b>Email</b>
          </label>
          <Space direction="horizontal">
            <Input
              placeholder="Vui lòng nhập email"
              value={email}
              onChange={(e) => handleChangeValue(e, setEmail)}
            />
          </Space>
          {email && wrongFormatPassword && (
            <Alert message="Email không hợp lệ" type="error" />
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label for="oldPassword">
            <b>Mật khẩu cũ</b>
          </label>
          <Space direction="horizontal">
            <Input.Password
              placeholder="Vui lòng điền mật khẩu cũ"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              value={oldPassword}
              onChange={(e) => handleChangeValue(e, setOldPassword)}
            />
          </Space>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label for="newPassword">
            <b>Mật khẩu mới</b>
          </label>
          <Space direction="horizontal">
            <Input.Password
              placeholder="Vui lòng điền mật khẩu mới"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              value={newPassword}
              onChange={(e) => handleChangeValue(e, setNewPassword)}
            />
          </Space>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label for="confirmNewPwd">
            <b>Xác thực mật khẩu mới</b>
          </label>
          <Space direction="horizontal">
            <Input.Password
              placeholder="Vui lòng xác nhận mật khẩu"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              value={confirmNewPwd}
              onChange={(e) => handleChangeValue(e, setConfirmNewPwd)}
            />
          </Space>
        </div>

        {warmingPassword && (
          <Alert
            style={{ marginTop: 10 }}
            message="Không trùng khớp với mật khẩu mới"
            type="error"
          />
        )}
      </form>
      <div className="buttons">
        {contextHolder}
        <button
          type="submit"
          onClick={(e) => {
            submitForm(e);
          }}
          style={{ padding: "0px 30px", fontSize: "20px" }}
        >
          Thay đổi mật khẩu
        </button>
      </div>
    </div>
  );
};

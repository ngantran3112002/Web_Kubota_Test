import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import "../css/register.css";
const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
}));
const RegisterAccount = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const submitForm = () => {};

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangeConfirmPwd = (event) => {
    setConfirmPwd(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className={classes.container}>
      <h3>ĐĂNG KÝ TÀI KHOẢN</h3>
      <form onSubmit={submitForm} style={{ width: "400px" }}>
        <label for="name">
          <b>Tên</b>
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          id="name"
          value={name}
          onChange={handleChangeName}
          required
        />
        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          id="email"
          onChange={handleChangeEmail}
          required
        />
        <label for="pw">
          <b>Mật khẩu</b>
        </label>
        <input
          type="text"
          placeholder="Enter your password"
          name="pw"
          id="pw"
          onChange={handleChangePassword}
          required
        />
        <label for="pw-confirm">
          <b>Xác minh mật khẩu</b>
        </label>
        <input
          type="text"
          placeholder="Confirm your name"
          name="pw-confirm"
          id="pw-confirm"
          onChange={handleChangeConfirmPwd}
          required
        />
        <label for="address">
          <b>Địa chỉ</b>
        </label>
        <input
          type="text"
          placeholder="Enter your address"
          name="address"
          id="address"
          onChange={handleChangeAddress}
          required
        />
        <label for="phone">
          <b>Số điện thoại</b>
        </label>
        <input
          type="text"
          placeholder="Enter your phone number"
          name="phone"
          id="phone"
          onChange={handleChangePhone}
          required
        />
      </form>
      <div className="buttons">
        <button type="submit" style={{ padding: "0px 30px", fontSize: "20px" }}>
          Đăng kí tài khoản
        </button>
      </div>
    </div>
  );
};

export default RegisterAccount;

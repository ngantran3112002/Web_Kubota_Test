import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import "../css/register.css";
import axios from "axios";
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
  

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

  const params = new URLSearchParams();
  params.append('userName', email);
  params.append('email', email);
  params.append('phone', phone);
  params.append('password', password)
  params.append('address', address)

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/users/register", params, config).then((res) => console.log(res))
  };

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
      <form onSubmit={(e) => submitForm} style={{ width: "400px" }}>
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
        <button type="submit" onClick={(e) => {submitForm(e)}} style={{ padding: "0px 30px", fontSize: "20px" }}>
          Đăng kí tài khoản
        </button>
      </div>
    </div>
  );
};

export default RegisterAccount;

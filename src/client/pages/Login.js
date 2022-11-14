import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
// import { Form, Button } from "react-bootstrap";
import "../css/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles(() => ({
  container: {
    minHeight: "77vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#eee',

  },
}));

const Login = () => {
  const [inputtext, setinputtext] = useState({
    email: "",
    password: "",
  });

  const [warnemail, setwarnemail] = useState(false);
  const [warnpassword, setwarnpassword] = useState(false);

  const [eye, seteye] = useState(true);
  const [password, setpassword] = useState("password");
  const [type, settype] = useState(false);

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputtext((lastValue) => {
      return {
        ...lastValue,
        [name]: value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setwarnemail(false);
    setwarnpassword(false);
    if (inputtext.email === "") {
      setwarnemail(true);
    } else if (inputtext.password === "") {
      setwarnpassword(true);
    } else {
      alert("form submitted");
    }
  };

  const Eye = () => {
    if (password === "password") {
      setpassword("text");
      seteye(false);
      settype(true);
    } else {
      setpassword("password");
      seteye(true);
      settype(false);
    }
  };
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className="card">
        <div className="text">
          <h2>Đăng nhập tài khoản</h2>{" "}
          <p>Enter your credentials to access your account.</p>
        </div>
        <form onSubmit={submitForm}>
          <div className="input-text">
            <input
              type="text"
              className={` ${warnemail ? "warning" : ""}`}
              placeholder="Enter your email"
              value={inputtext.email}
              onChange={inputEvent}
              name="email"
            />
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="input-text">
            <input
              type={password}
              className={` ${warnpassword ? "warning" : ""} ${
                type ? "type_password" : ""
              }`}
              placeholder="Enter your password"
              value={inputtext.password}
              onChange={inputEvent}
              name="password"
            />
            <FontAwesomeIcon icon={faLock} />
            <FontAwesomeIcon onClick={Eye} icon={eye ? faEye : faEyeSlash} />
          </div>
          <div className="buttons">
            <button type="submit">Sign in</button>
          </div>
          <div className="forgot">
            <p>
              Forgot your password? <a href="/forgotPassword">Reset Password</a>
            </p>
          </div>
        </form>
      </div>
      {/* <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div> */}
    </div>
  );
};

export default Login;

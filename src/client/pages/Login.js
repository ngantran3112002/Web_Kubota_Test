import React, { useContext, useState } from 'react';
import { makeStyles } from '@mui/styles';
// import { Form, Button } from "react-bootstrap";
import '../css/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { email } from 'ra-core';
import { UserContext } from '../context';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const useStyles = makeStyles(() => ({
	container: {
		minHeight: '77vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#eee',
	},
}));

const Login = () => {
	const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const goHomePage = () => {
    navigate("/")
  }

	const [inputtext, setinputtext] = useState({
		email: '',
		password: '',
	});

	const [warnemail, setwarnemail] = useState(false);
	const [warnpassword, setwarnpassword] = useState(false);

	const [eye, seteye] = useState(true);
	const [password, setpassword] = useState('password');
	const [type, settype] = useState(false);

	const params = new URLSearchParams();
	params.append('email', inputtext.email);
	params.append('password', inputtext.password);

	const config = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	};

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

	const submitForm = async (e) => {
		e.preventDefault();
		setwarnemail(false);
		setwarnpassword(false);
		if (inputtext.email === '') {
			setwarnemail(true);
		} else if (inputtext.password === '') {
			setwarnpassword(true);
		} else {
			console.log(email);
			await axios
				.post('http://localhost:5000/users/login', params, config)
				.then((res) => {
          if (res.status === 200) {
            setUser({ userInfo: res.data.user, token: res.data.accessToken })
            navigate("/")
          } 
        })
				.catch((err) => console.warn(err));
		}
	};

	const Eye = () => {
		if (password === 'password') {
			setpassword('text');
			seteye(false);
			settype(true);
		} else {
			setpassword('password');
			seteye(true);
			settype(false);
		}
	};
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className="card">
				<div className="text">
					<h2>Đăng nhập tài khoản</h2>{' '}
					<p>Nhập thông tin đăng nhập của bạn để truy cập vào tài khoản của bạn.</p>
				</div>
				<form onSubmit={(e) => submitForm(e)}>
					<div className="input-text">
						<input
							type="text"
							className={` ${warnemail ? 'warning' : ''}`}
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
							className={` ${warnpassword ? 'warning' : ''} ${type ? 'type_password' : ''}`}
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
							Thay đổi mật khẩu? <a href="/forgotPassword">Change Password</a>
						</p>
					</div>
					<div className="register">
						<p style={{ marginRight: '5px' }}>Bạn chưa có tài khoản?</p>
						<a href="/registerAccount">Đăng kí tài khoản</a>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;

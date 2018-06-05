import React, { Component } from 'react';
import '../../styles/login.css';
import LoginForm from '../app/login/Login'
class Login extends Component {
	render() {
		return (
			<div className="Login">
				<div className="Login-body">
					<LoginForm />
				</div>
			</div>
		);
	}
}

export default Login;

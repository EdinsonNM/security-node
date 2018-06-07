import React, { Component } from 'react';
import UserAction from '../../../redux/actions/user';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {STATUS_SERVICE} from '../../../constants/services'
import { Route, Redirect } from 'react-router'

class LoginForm extends Component{
	state = {
		username: '',
		password: ''
	}
	handleChange = (key) => (e) => {
		this.setState({[key]: e.target.value});
	}
	handleSubmit = () => {
		this.props.login(this.state.username, this.state.password);
	}
	render(){
		if(this.props.status === STATUS_SERVICE.SUCCESS){
			this.props.loginReset();
			return <Redirect push to={{pathname: '/dashboard'}}/>;
		}
		return(
			<Card>
				<CardContent>
					<Typography variant="headline" component="h2" style={{color: 'rgb(95, 51, 97)'}}>
					<span className="material-icons" >verified_user</span> Security Node App
					</Typography>
					<Typography color="textSecondary">
					Ingrese su nombre de usuario y contraseña para iniciar sesión.
					</Typography>
					
					<form noValidate autoComplete="off">
						<TextField
						id="username"
						label="Usuario"
						margin="normal"
						fullWidth
						onChange = {this.handleChange('username')}
						/>
						<TextField
						id="password"
						label="Contraseña"
						margin="normal"
						fullWidth
						type="password"
						onChange = {this.handleChange('password')}
						/>
					</form>
				</CardContent>
				<CardActions>
					<Button size="small" onClick={this.handleSubmit}>Entrar</Button>
				</CardActions>
			</Card>
		)

	} 
}

const mapStateToProps = (state, ownProps) => ({
	status: state.UserReducer.statusLoginService
})
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
	login: UserAction.login,
	loginReset: UserAction.loginReset

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm) ;
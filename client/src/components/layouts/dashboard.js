import React, { Component } from 'react';
import '../../styles/dashboard.css';
import HeaderApp from '../app/dashboard/header';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Applications from '../app/dashboard/applications/applications';
import Connections from '../app/dashboard/connections/connections';
import Users from '../app/dashboard/users/users';
import Token from '../app/dashboard/token/token';
import UserAction from '../../redux/actions/user';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { STATUS_SERVICE } from '../../constants/services';
import AuthToken from '../../lib/auth-token';
import { Route, Redirect } from 'react-router'
import UserForm from '../app/dashboard/user/user-form';

class Dashboard extends Component {
	state={
		applicationSelected: -1,
		connectionSelected: -1,
		openUserForm: false,
		model:{}
	}
	constructor(props){
		super();
		props.meReset();
	}
	componentDidMount(){
		this.props.me();
	}
	handleApplicationSelect = (id) => () => {
		this.setState({applicationSelected: id});
	}
	handleConnectionnSelect = (id) => {
		console.log(id);
		this.setState({connectionSelected: id});
	}
	handleOpenUserForm = () => {
		this.setState({openUserForm: true});
	}
	handleCloseUserForm = () => {
		this.setState({openUserForm: false});
	}
	handleChangeForm = (name) => (e) => {
		this.setState({model: {...this.state.model, [name]: e.target.value}})
	}
	handleSave = () =>{
		this.props.save(this.state.model);
		this.setState({openUserForm: false});
	}
	render() {
		if(this.props.status === STATUS_SERVICE.ERROR){
			AuthToken.setToken();
			return <Redirect push to={{pathname: '/login'}}/>;
		}
		if([STATUS_SERVICE.INPROGRESS, STATUS_SERVICE.INITIAL].includes(this.props.status)){
			return <div>cargando...</div>;
		}
		return (
			<div className="Dashboard">
			<HeaderApp {...this.props} handleOpenUserForm={this.handleOpenUserForm} />
			<div className="Dashboard-container">
				<Applications applicationSelected={this.state.applicationSelected} handleApplicationSelect={this.handleApplicationSelect}/>
				<div className="Dashboard-detail">
					<Connections idApplication={this.state.applicationSelected} handleConnectionnSelect={this.handleConnectionnSelect} />
					<Users idConnection={this.state.connectionSelected} />
				</div>
				{this.state.openUserForm && <UserForm model={this.state.model} handleClose={this.handleCloseUserForm} handleChange={this.handleChangeForm} handleSave={this.handleSave}/>}
			</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	status: state.UserReducer.statusMeService,
	user: state.UserReducer.user
})
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
	me: UserAction.me,
	save: UserAction.save,
	logout: UserAction.logout,
	meReset: UserAction.meReset
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard) ;
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

class Dashboard extends Component {
	state={
		applicationSelected: -1
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
			<HeaderApp />
			<div className="Dashboard-container">
				<Applications applicationSelected={this.state.applicationSelected} handleApplicationSelect={this.handleApplicationSelect}/>
				<div className="Dashboard-detail">
					<Token idApplication={this.state.applicationSelected} />
					<Connections idApplication={this.state.applicationSelected}/>
					<Users idApplication={this.state.applicationSelected}/>
				</div>
				
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
	meReset: UserAction.meReset
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard) ;
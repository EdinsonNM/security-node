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

class Dashboard extends Component {
	state={
		applicationSelected: -1
	}
	handleApplicationSelect = (id) => () => {
		this.setState({applicationSelected: id});
	}
	render() {
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
export default Dashboard;


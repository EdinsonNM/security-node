import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const Users = () => (
	<div className="Dashboard-users">
		<Toolbar className="Dashboard-toolbar">
			<Typography variant="title" color="inherit">
				Ultimos Usuarios conectados
			</Typography>
		</Toolbar>
	</div>
);

export default Users;
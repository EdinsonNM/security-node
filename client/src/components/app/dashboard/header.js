import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const HeaderApp = (props) => (
	<AppBar position="static">
		<Toolbar>
		<Typography variant="title" color="inherit" style={{flex: 1}}>
			Dashboard Security
		</Typography>
		<Button color="inherit" onClick={props.logout}><span className="material-icons">account_circle</span> Salir</Button>
		</Toolbar>
	</AppBar>
);
export default HeaderApp;
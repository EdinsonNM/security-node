import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const SectionHeader = ({title, subtitle = '', actions}) => (
	<Toolbar className="Dashboard-toolbar">
		<Typography variant="title" color="inherit">
			{title} <small className="Dashboard-header-subtitle">{subtitle}</small>
		</Typography>
		<div style={{flex:1}}></div>
		<div>
			{actions}
		</div>
	</Toolbar>
);
export default SectionHeader;
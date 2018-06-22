import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import dateFormat from "dateformat";

const UsersBody = ({data = [], selected, handleSelect = () => {}}) => (
	<Table>
		<TableHead>
			<TableRow>
				<TableCell>F. INGRESO</TableCell>	
				<TableCell>USUARIO</TableCell>
				<TableCell>IP</TableCell>
				<TableCell>FIN SESIÓN</TableCell>
			</TableRow>
		</TableHead>
		<TableBody>
			{data && data.map(n => {
				return (
				<TableRow key={n._id} hover selected={n._id === selected} >
					<TableCell component="th" >{dateFormat(n.createdAt,"dd/mm/yyyy hh:mm:ss")}</TableCell>
					<TableCell>{n.user}</TableCell>
					<TableCell>{n.ip}</TableCell>
					<TableCell>{dateFormat(n.createdAt,"dd/mm/yyyy")}</TableCell>
				</TableRow>
				);
			})}
		</TableBody>
	</Table>
);

export default UsersBody;
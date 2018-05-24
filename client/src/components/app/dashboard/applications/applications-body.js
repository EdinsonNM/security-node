import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import dateFormat from "dateformat";

const ApplicationsBody = ({data = [], selected, handleSelect}) => (
	<Table>
		<TableHead>
			<TableRow>
				<TableCell>F.CREACIÓN</TableCell>
				<TableCell>NOMBRE</TableCell>
			</TableRow>
		</TableHead>
		<TableBody>
			{data && data.map(n => {
				return (
				<TableRow key={n._id} hover selected={n._id === selected} onClick={handleSelect(n._id)}>
					<TableCell component="th" >{dateFormat(n.createdAt,"dd/mm/yyyy")}</TableCell>
					<TableCell>{n.name}</TableCell>
				</TableRow>
				);
			})}
		</TableBody>
	</Table>
);

export default ApplicationsBody;
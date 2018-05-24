import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ApplicationForm = ({model, handleClose, handleSave, handleChange, title='Nueva Aplicación'}) => {
	return(
		<Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title">
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Las aplicaciones registradas permiten generar accesos seguros a traves de tokens de seguridad para conexión a bases de datos 
				</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Aplicación"
					type="text"
					fullWidth
					onChange={handleChange('name')}
					value={model.name}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">
					Cancelar
				</Button>
				<Button onClick={handleSave} color="primary">
					Registrar
				</Button>
			</DialogActions>
		</Dialog>
	)
}
export default ApplicationForm;
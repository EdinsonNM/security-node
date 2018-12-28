import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const UserForm = ({model, handleClose, handleSave, handleChange, title='Nuevo Usuario'}) => {
	return(
		<Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title">
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Registre un nuevo usuario al panel. 
				</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="username"
					label="Usuario"
					type="text"
					fullWidth
					onChange={handleChange('username')}
					value={model.username}
                />
                <TextField
					autoFocus
					margin="dense"
					id="password"
					label="Contraseña"
					type="password"
					fullWidth
					onChange={handleChange('password')}
					value={model.password}
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
export default UserForm;
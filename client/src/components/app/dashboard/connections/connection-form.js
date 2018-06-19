import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Chip from '@material-ui/core/Chip';

const ConnectionForm = ({model, handleClose, handleSave, handleChange, title='Nueva Conexión'}) => {
	return(
		<Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title">
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Las aplicaciones registradas deben contener registradas conexiones a sus base de datos 
				</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="server"
					label="Server"
					type="text"
					fullWidth
					onChange={handleChange('server')}
					value={model.server}
				/>
				<TextField
					autoFocus
					margin="dense"
					id="user"
					label="Usuario"
					type="text"
					fullWidth
					onChange={handleChange('user')}
					value={model.user}
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
				<TextField
					autoFocus
					margin="dense"
					id="database"
					label="Base de datos"
					type="text"
					fullWidth
					onChange={handleChange('database')}
					value={model.database}
				/>
				{
					model._id && 
					<DialogContentText>
						Token:<br/>
						<span style={{color: 'green'}}>{model.token}</span>
					</DialogContentText>
				}
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
export default ConnectionForm;
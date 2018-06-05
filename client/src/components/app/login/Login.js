import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const LoginForm = () => (
	<Card>
		<CardContent>
			<Typography variant="headline" component="h2" style={{color: 'rgb(95, 51, 97)'}}>
			<span className="material-icons" >verified_user</span> Security Node App
			</Typography>
			<Typography color="textSecondary">
			Ingrese su nombre de usuario y contraseña para iniciar sesión.
			</Typography>
			
			<form noValidate autoComplete="off">
				<TextField
				id="username"
				label="Usuario"
				margin="normal"
				fullWidth
				/>
				<TextField
				id="password"
				label="Contraseña"
				margin="normal"
				fullWidth
				type="password"
				/>
			</form>
		</CardContent>
		<CardActions>
			<Button size="small">Entrar</Button>
		</CardActions>
	</Card>
)

export default LoginForm;
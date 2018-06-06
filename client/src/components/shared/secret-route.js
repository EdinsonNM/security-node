const SecretRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
		AuthService.isAuthenticated === true
		? <Component {...props} />
		: <Redirect to='/login' />
	)} />
);
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SectionHeader from '../../../shared/section-header';
import IconButton from '@material-ui/core/IconButton';
import ConnectionAction from '../../../../redux/actions/connection';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ConnectionsBody from './connections-body';
import ConnectionForm from './connection-form';
const data = [
	{name:'Frozen yoghurt', fat:159, carbs: 6.0, protein:24, calories:4.0},
	{name:'Ice cream sandwich',fat: 237, carbs: 9.0, protein:37, calories:4.3},
	{name:'Eclair', fat: 262, carbs: 16.0, protein: 24, calories:6.0},
	{name:'Cupcake', fat: 305, carbs: 3.7, protein: 67, calories:4.3},
	{name:'Gingerbread', fat: 356, carbs: 16.0, protein: 49, calories: 3.9}
];
class Connections extends React.Component{
	state = {
		formOpen: false,
		model:{},
	}
	componentDidUpdate(nextProps){
		if(nextProps.idApplication!== -1 && nextProps.idApplication !== this.props.idApplication){
			this.setState({ model:{ ...this.state.model, _app: this.props.idApplication }});
			this.props.load(this.props.idApplication)
		}
	}
	toggleForm = () => {
		this.setState({formOpen: !this.state.formOpen, model: {}});
	}
	handleChangeForm = (name) => (e) => {
		this.setState({model: {...this.state.model, [name]: e.target.value}})
	}
	handleSave = () =>{
		this.props.save({...this.state.model, _app:this.props.idApplication });
		this.toggleForm();
	}
	handleClose = () =>{
		this.toggleForm();
	}
	handleSelect = () => {

	}
	render(){
		const actions = [
			<IconButton onClick={this.toggleForm}>
				<span className="material-icons">add</span>
			</IconButton>
		]
		return (
			<div className="Dashboard-connections">
				<SectionHeader title="conexiones" actions={actions}/>
				<ConnectionsBody  data={this.props.connections} handleSelect={this.handleSelect}/>
				{this.state.formOpen && <ConnectionForm model={this.state.model} handleChange={this.handleChangeForm} handleClose={this.handleClose} handleSave={this.handleSave} />}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	statusService: state.ConnectionReducer.statusService,
	connections: state.ConnectionReducer.connections
})
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
	load: ConnectionAction.load,
	save: ConnectionAction.save
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Connections) ;
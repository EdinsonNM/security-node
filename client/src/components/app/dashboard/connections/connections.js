import React from 'react';
import SectionHeader from '../../../shared/section-header';
import IconButton from '@material-ui/core/IconButton';
import ConnectionAction from '../../../../redux/actions/connection';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ConnectionsBody from './connections-body';
import ConnectionForm from './connection-form';

class Connections extends React.Component{
	state = {
		formOpen: false,
		model:{},
		selected: -1
	}
	componentDidUpdate(nextProps){
		if(nextProps.idApplication!== -1 && nextProps.idApplication !== this.props.idApplication){
			this.setState({ model:{ ...this.state.model, _app: this.props.idApplication }});
			this.props.load(this.props.idApplication)
		}
	}
	toggleForm = (model = {}, title = '') => {
		this.setState({formOpen: !this.state.formOpen, model, title});
	}
	handleChangeForm = (name) => (e) => {
		this.setState({model: {...this.state.model, [name]: e.target.value}})
	}
	handleSave = () =>{
		if(this.state.model._id){
			this.props.update({...this.state.model});
		}else {
			this.props.save({...this.state.model, _app:this.props.idApplication });
		}
		this.toggleForm();
	}
	handleClose = () =>{
		this.toggleForm();
	}
	handleSelect = (selected) => () => {
		//alert(selected)
		this.setState({ selected, model: this.props.connections.find((c) => c._id === selected)});
	}

	handleEdit = () => {
		this.toggleForm(this.state.model, 'Editar Conexión');
	}
	handleDelete = () => {
		const remove = window.confirm("Desea eliminar la conexión?");
		if (remove) {
			this.props.delete(this.state.model._app, this.state.selected);
		}
	}
	handleNew = () =>{
		this.toggleForm({}, 'Nueva Conexión');
	}
	render(){
		const actions = [
			<IconButton onClick={this.handleNew}>
				<span className="material-icons">add</span>
			</IconButton>,
			<IconButton onClick={this.handleEdit}>
				<span className="material-icons">edit</span>
			</IconButton>,
			<IconButton onClick={this.handleDelete}>
				<span className="material-icons">remove</span>
			</IconButton>
		]
		return (
			<div className="Dashboard-connections">
				<SectionHeader title="conexiones" actions={actions}/>
				<ConnectionsBody selected={this.state.selected}  data={this.props.connections} handleSelect={this.handleSelect}/>
				{this.state.formOpen && <ConnectionForm title={this.state.title} model={this.state.model} handleChange={this.handleChangeForm} handleClose={this.handleClose} handleSave={this.handleSave} />}
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
	save: ConnectionAction.save,
	update: ConnectionAction.update,
	delete: ConnectionAction.delete
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Connections) ;
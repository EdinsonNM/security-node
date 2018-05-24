import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ApplicationsBody from './applications-body';
import SectionHeader from '../../../shared/section-header';
import ApplicationForm from './application-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ApplicationAction from '../../../../redux/actions/application';

const data = [
	{name:'Frozen yoghurt', fat:159, carbs: 6.0, protein:24, calories:4.0},
	{name:'Ice cream sandwich',fat: 237, carbs: 9.0, protein:37, calories:4.3},
	{name:'Eclair', fat: 262, carbs: 16.0, protein: 24, calories:6.0},
	{name:'Cupcake', fat: 305, carbs: 3.7, protein: 67, calories:4.3},
	{name:'Gingerbread', fat: 356, carbs: 16.0, protein: 49, calories: 3.9}
];
class Applications extends Component{
	state = {
		formOpen: false,
		model:{},
	}
	componentDidMount = () => {
		this.props.loadApplications();
	}
	toggleForm = () => {
		this.setState({formOpen: !this.state.formOpen, model: {}});
	}
	handleChangeForm = (name) => (e) => {
		this.setState({model: {...this.state.model, [name]: e.target.value}})
	}
	handleSave = () =>{
		this.props.saveApplication(this.state.model);
		this.toggleForm();
	}
	handleClose = () =>{
		this.toggleForm();
	}
	render(){
		const actions = [
			<IconButton onClick={this.toggleForm}>
				<span className="material-icons">add</span>
			</IconButton>
		]
		return (
			<div className="Dashboard-application">
				<SectionHeader title="Aplicaciones" actions={actions} />
				<ApplicationsBody data={this.props.applications} selected={this.props.applicationSelected} handleSelect={this.props.handleApplicationSelect} />
				{this.state.formOpen && <ApplicationForm model={this.state.model} handleChange={this.handleChangeForm} handleClose={this.handleClose} handleSave={this.handleSave} />}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	statusService: state.ApplicationReducer.statusService,
	applications: state.ApplicationReducer.applications
})
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
	loadApplications: ApplicationAction.loadApplications,
	saveApplication: ApplicationAction.saveApplication
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Applications) ;
import React from 'react';
import UsersBody from './users-body'
import SectionHeader from '../../../shared/section-header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserLogAction from '../../../../redux/actions/userlog';
class Users extends React.Component{
	componentDidUpdate(nextProps){
		if(nextProps.idConnection!== -1 && nextProps.idConnection !== this.props.idConnection){
			this.props.load(this.props.idConnection)
		}
	}
	render(){
		return (
			<div className="Dashboard-users">
				<SectionHeader title="Log de Usuarios" actions={[]}/>
				<UsersBody data={this.props.userlogs} />
			</div>
		);
	}
} 

const mapStateToProps = (state, ownProps) => ({
	statusService: state.UserLogReducer.statusService,
	userlogs: state.UserLogReducer.userlogs
})
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
	load: UserLogAction.load
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Users) ;
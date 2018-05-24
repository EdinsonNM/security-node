import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SectionHeader from '../../../shared/section-header';
import TokenAction from '../../../../redux/actions/token';
import IconButton from '@material-ui/core/IconButton';

class Token extends Component {
	componentDidUpdate(nextProps){
		if(nextProps.idApplication!== -1 && nextProps.idApplication !== this.props.idApplication){
			this.props.load(this.props.idApplication)
		}
	}
	render(){
		const actions = [
			<IconButton onClick={() => this.props.save(this.props.idApplication)}>
				<span className="material-icons">sync</span>
			</IconButton>
		];
		return (
			<div className="Dashboard-token">
			<SectionHeader title="Token" subtitle={this.props.token.token} actions={actions} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	statusService: state.TokenReducer.statusService,
	token: state.TokenReducer.token || { token: 'Genere un token...'}
})
const mapDispatchToProps = (dispatch) => bindActionCreators({
	load: TokenAction.load,
	save: TokenAction.save
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Token) ;
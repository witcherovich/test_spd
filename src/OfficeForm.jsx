import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addOffice } from './actionCreators';

class OfficeForm extends Component {
	render() {
		return (
			<div className="OfficeForm"></div>
		);
	}
}

const mapDispatchToProps = dispatch => 
	bindActionCreators({
		addOffice: addOffice
	}, dispatch)

export default connect(null, mapDispatchToProps)(OfficeForm);

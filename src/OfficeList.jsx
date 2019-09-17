import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeOffice } from './actionCreators';

import OfficeItem from './OfficeItem';

class OfficeList extends Component {
  render() {
  	const { offices, removeOffice } = this.props;
    return (
    	<div className="OfficeList">
    		{offices.map(office => 
    			<OfficeItem key={office.id} office={office} removeOffice={removeOffice} />
    		)}
    	</div>
    );
  }
}

const mapStateToProps = state => {
	return {
		offices: state
	}
}

const mapDispatchToProps = dispatch => 
	bindActionCreators({
		removeOffice: removeOffice
	}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OfficeList);

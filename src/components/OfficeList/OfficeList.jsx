import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OfficeItem from '../OfficeItem/OfficeItem';

class OfficeList extends Component {
  render() {
  	const { offices, removeOffice, editOffice } = this.props;
    return (
    	<div className="OfficeList">
    		{offices.map(office => 
    			<OfficeItem key={office.id} 
          						office={office} 
          						removeOffice={removeOffice} 
          						editOffice={editOffice} />
    		)}
    	</div>
    );
  }
}

OfficeList.propTypes = {
  offices: PropTypes.array.isRequired,
  removeOffice: PropTypes.func.isRequired,
  editOffice: PropTypes.func.isRequired
}

export default OfficeList;

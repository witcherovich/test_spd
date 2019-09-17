import React, { Component } from 'react';

import OfficeItem from './OfficeItem';

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

export default OfficeList;

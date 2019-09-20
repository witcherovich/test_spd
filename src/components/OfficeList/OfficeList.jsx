// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import type { OfficesState } from '../../flow-types/officesTypes';

import OfficeItem from '../OfficeItem/OfficeItem';

type OfficeListProps = {
  offices: OfficesState,
  removeOffice: any,
  editOffice: any
}

class OfficeList extends Component<OfficeListProps> {
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

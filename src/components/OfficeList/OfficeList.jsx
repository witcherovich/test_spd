// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import type { OfficesState } from '../../flow-types/officesTypes';
import type { Office } from '../../flow-types/officeFormTypes';

import OfficeItem from '../OfficeItem/OfficeItem';

type OfficeListProps = {
  offices: OfficesState,
  removeOffice: (officeId: string) => void,
  editOffice: (office: Office) => void
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

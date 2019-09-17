import React from 'react';

export default function OfficeItem(props) {
	const {
		id,
		country, 
		stateOrProvince, 
		postalCode, 
		city, 
		streetAddress, 
		address2, 
		phone, 
		fax, 
		email, 
		officeType
	} = props.office;

	function handleRemoveOffice() {
		const needToRemoveOffice = window.confirm("Press 'OK' to remove office.");
		
		if (needToRemoveOffice) {
			props.removeOffice(id);
		}
	}

	function handleEditOffice() {
		props.editOffice(props.office);
	}

	return (
		<div className="OfficeItem">
			{id} {country} <button onClick={handleRemoveOffice}>Remove</button> <button onClick={handleEditOffice}>Edit</button>
		</div>
	);
}

import React from 'react';

import './OfficeItem.css';

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
		<div className="OfficeItem OfficeItem__text">
			<div className="OfficeItem__column_wrapper">
				<div className="OfficeItem__column">
					<div className="OfficeItem__row">
						<div className="OfficeItem__label OfficeForm__form_label">Adress:</div>
						<div className="OfficeItem__column">
							{officeType && <div className="OfficeItem__text_bold">Primary HQ</div>}
							<div>{address2}</div>
							<div>{streetAddress}</div>
							<div>{city}, {stateOrProvince} {postalCode}</div>
							<div>{country}</div>
						</div>
					</div>
				</div>

				<div className="OfficeItem__column OfficeItem__column_margin_left">
					{!!phone && 
						<div className="OfficeItem__row">
							<div className="OfficeItem__label OfficeForm__form_label">Phone:</div>
							<div className="OfficeItem__office_inf">{phone}</div>
						</div>
					}
					{!!fax && 
						<div className="OfficeItem__row">
							<div className="OfficeItem__label OfficeForm__form_label">Fax:</div>
							<div className="OfficeItem__office_inf">{fax}</div>
						</div>
					}
					{!!email && 
						<div className="OfficeItem__row">
							<div className="OfficeItem__label OfficeForm__form_label">Email:</div>
							<div className="OfficeItem__office_inf">{email}</div>
						</div>
					}
				</div>
			</div>
			<div className="OfficeItem__column">
				<button className="OfficeForm__btn OfficeItem__btn_normal" onClick={handleRemoveOffice}>Remove</button>
				<button className="OfficeForm__btn OfficeForm__margin_left OfficeForm__style_primary" onClick={handleEditOffice}>Edit</button>
			</div>
		</div>
	);
}

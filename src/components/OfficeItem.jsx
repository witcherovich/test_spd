import React from 'react';

import checkMark from '../images/checkMark.jpg';

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
		<div className="OfficeItem">
			<div className="OfficeItem__column_wrapper OfficeItem__text">
				<div className="OfficeItem__column">
					<div className="OfficeItem__row">
						<div className="text__dark OfficeItem__label">Adress:</div>
						<div className="OfficeItem__column">
							{officeType && 
								<div className="text__bold OfficeItem__office_type">
									<img className="OfficeItem__img" alt="Check mark" src={checkMark} />
									Primary HQ
								</div>
							}
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
							<div className="text__dark OfficeItem__label">Phone:</div>
							<div className="OfficeItem__office_inf">{phone}</div>
						</div>
					}
					{!!fax && 
						<div className="OfficeItem__row">
							<div className="text__dark OfficeItem__label">Fax:</div>
							<div className="OfficeItem__office_inf">{fax}</div>
						</div>
					}
					{!!email && 
						<div className="OfficeItem__row">
							<div className="text__dark OfficeItem__label">Email:</div>
							<div className="OfficeItem__office_inf">{email}</div>
						</div>
					}
				</div>
			</div>
			<div className="OfficeItem__column">
				<button className="btn" onClick={handleRemoveOffice}>Remove</button>
				<button className="btn btn__primary OfficeForm__margin_left" onClick={handleEditOffice}>Edit</button>
			</div>
		</div>
	);
}

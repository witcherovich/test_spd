import React from 'react';

import checkMark from '../../images/checkMark.jpg';

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
							{!!address2 && 
								<span>{address2}</span>
							}
							<span>{streetAddress}</span>
							<span>{city}, {stateOrProvince} {postalCode}</span>
							<span>{country}</span>
						</div>
					</div>
				</div>

				<div className="OfficeItem__column OfficeItem__column_margin_left">
					{!!phone && 
						<div className="OfficeItem__row">
							<div className="text__dark OfficeItem__label">Phone:</div>
							<span className="OfficeItem__office_inf">{phone}</span>
						</div>
					}
					{!!fax && 
						<div className="OfficeItem__row">
							<div className="text__dark OfficeItem__label">Fax:</div>
							<span className="OfficeItem__office_inf">{fax}</span>
						</div>
					}
					{!!email && 
						<div className="OfficeItem__row">
							<div className="text__dark OfficeItem__label">Email:</div>
							<span className="OfficeItem__office_inf">{email}</span>
						</div>
					}
				</div>
			</div>
			<div className="OfficeItem__column">
				<div className="OfficeItem__row">
					<button className="btn" onClick={handleRemoveOffice}>Remove</button>
					<button className="btn btn__primary OfficeForm__margin_left" onClick={handleEditOffice}>Edit</button>
				</div>
			</div>
		</div>
	);
}

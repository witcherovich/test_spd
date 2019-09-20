// @flow
import React from 'react';

import type { Office } from '../../flow-types/officeFormTypes';

import checkMark from '../../images/checkMark.jpg';

import './OfficeItem.css';

type OfficeItemProps = {
	office: Office,
	editOffice: (office: Office) => void,
	removeOffice: (officeId: string) => void
}

export default function OfficeItem(props: OfficeItemProps) {
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

	function handleRemoveOffice(): void {
		const needToRemoveOffice = window.confirm("Press 'OK' to remove office.");
		
		if (needToRemoveOffice && id !== null) {
			props.removeOffice(id);
		}
	}

	function handleEditOffice(): void {
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
								<span className="OfficeItem__office_inf">{address2}</span>
							}
							<span className="OfficeItem__office_inf">{streetAddress}</span>
							<span className="OfficeItem__office_inf">{city}, {stateOrProvince} {postalCode}</span>
							<span className="OfficeItem__office_inf">{country}</span>
						</div>
					</div>
				</div>

				<div className="OfficeItem__column">
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

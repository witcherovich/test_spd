// @flow
import { SET_OFFICES, ADD_OFFICE, EDIT_OFFICE, REMOVE_OFFICE } from '../actions/officesActions';
import type { OfficesState, OfficesActions } from '../flow-types/officesTypes';

const officesInitialState: OfficesState = [];

export default function officesReducer(state: OfficesState = officesInitialState, action: OfficesActions): OfficesState {
	switch(action.type) {
		case SET_OFFICES:
			const offices = action.payload.offices;
			return [...state, ...offices];

		case ADD_OFFICE:
			const office = action.payload.office;
			return [...state, office];

		case EDIT_OFFICE:
			const editedOffice = action.payload.office;
			return state.map(office => 
				editedOffice.id === office.id ? 
					{...office, ...editedOffice} : office
			);

		case REMOVE_OFFICE:
			const officeId = action.payload.officeId;
			return state.filter(office => office.id !== officeId);

		default:
			return state;
	}
}

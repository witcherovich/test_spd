import { ADD_OFFICE, EDIT_OFFICE, REMOVE_OFFICE } from '../actionCreators';

let lastOfficeId = 0;

export default function officesReducer(state = [], { type, payload }) {
	switch(type) {
		case ADD_OFFICE:
			const office = payload.office;
			office.id = lastOfficeId;
			lastOfficeId++;
			return [...state, office];

		case EDIT_OFFICE:
			const editedOffice = payload.office;
			return state.map(office => 
				editedOffice.id === office.id ? 
					{...office, ...editedOffice} : office
			);

		case REMOVE_OFFICE:
			const officeId = payload.officeId;
			return state.filter(office => office.id !== officeId);

		default:
			return state;
	}
}

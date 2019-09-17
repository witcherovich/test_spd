export const ADD_OFFICE = 'ADD_OFFICE';
export const EDIT_OFFICE = 'EDIT_OFFICE';
export const REMOVE_OFFICE = 'REMOVE_OFFICE';

export function addOffice(office) {
	return {
		type: ADD_OFFICE,
		payload: {
			office
		}
	}
}

export function editOffice(office) {
	return {
		type: EDIT_OFFICE,
		payload: {
			office
		}
	}
}

export function removeOffice(officeId) {
	return {
		type: REMOVE_OFFICE,
		payload: {
			officeId
		}
	}
}

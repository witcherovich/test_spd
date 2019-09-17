// Office actions and actionCreators
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


// Office form const and actionCreators
export const SET_INITIAL_FORM_STATE = 'SET_INITIAL_FORM_STATE';
export const SET_FORM_STATE = 'SET_FORM_STATE';
export const SET_FORM_FIELD = 'SET_FORM_FIELD';

export function setInitialFormState() {
	return {
		type: SET_INITIAL_FORM_STATE
	}
}

export function setFormState(office) {
	return {
		type: SET_FORM_STATE,
		payload: {
			office
		}
	}
}

export function setFormField(field) {
	return {
		type: SET_FORM_FIELD,
		payload: {
			field
		}
	}
}


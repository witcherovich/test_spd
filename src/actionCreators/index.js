import firebase from '../firebaseConfig';
const db = firebase.database().ref();

// Office actions
export const ADD_OFFICE = 'ADD_OFFICE';
export const EDIT_OFFICE = 'EDIT_OFFICE';
export const REMOVE_OFFICE = 'REMOVE_OFFICE';

// Office form actions
export const SET_INITIAL_FORM_STATE = 'SET_INITIAL_FORM_STATE';
export const SET_FORM_STATE = 'SET_FORM_STATE';
export const SET_FORM_FIELD = 'SET_FORM_FIELD';

// Office action creators
export const saveOfficeDB = office => dispatch => {
	const isEditMode = !!office.id;

	const officeId = office.id || db.child('offices').push().key;
	const newOffice = {...office, id: officeId};
	const updates = {};

	updates[`/offices/${officeId}`] = newOffice;

	return db.update(updates)
		.then(() => {
			isEditMode ?
				dispatch(editOffice(newOffice)) :
				dispatch(addOffice(newOffice))
		})
		.catch(error => console.log('error', error));
}

export const removeOfficeDB = officeId => dispatch => {
	return db.child(`/offices/${officeId}`).remove()
		.then(() => dispatch(removeOffice(officeId)))
		.catch(error => console.log('error', error));
}

function addOffice(office) {
	return {
		type: ADD_OFFICE,
		payload: {
			office
		}
	}
}

function editOffice(office) {
	return {
		type: EDIT_OFFICE,
		payload: {
			office
		}
	}
}

function removeOffice(officeId) {
	return {
		type: REMOVE_OFFICE,
		payload: {
			officeId
		}
	}
}

// Office form action creators
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

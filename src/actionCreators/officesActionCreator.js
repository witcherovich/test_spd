// @flow
import type { Action, Dispatch } from '../flow-types';
import type { T_SET_OFFICES, T_ADD_OFFICE, T_EDIT_OFFICE, T_REMOVE_OFFICE } from '../flow-types/officesTypes';
import type { Office } from '../flow-types/officeFormTypes';

import firebase from '../firebaseConfig';
const db = firebase.database().ref();

export const SET_OFFICES: T_SET_OFFICES = 'SET_OFFICES';
export const ADD_OFFICE: T_ADD_OFFICE = 'ADD_OFFICE';
export const EDIT_OFFICE: T_EDIT_OFFICE = 'EDIT_OFFICE';
export const REMOVE_OFFICE: T_REMOVE_OFFICE = 'REMOVE_OFFICE';

export const fetchOfficesDB = () => (dispatch: Dispatch): void => {
	return db.child('/offices').once('value')
		.then(data => {
			const offices = Object.values(data.val()) || [];
			dispatch(setOffices(offices));
		})
		.catch(() => alert('Service Unavailable error message'));
}

export const saveOfficeDB = (office: Office): any => (dispatch: Dispatch): void => {
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
		.catch(() => alert('Service Unavailable error message'));
}

export const removeOfficeDB = (officeId: string): any => (dispatch: Dispatch): void => {
	return db.child(`/offices/${officeId}`).remove()
		.then(() => dispatch(removeOffice(officeId)))
		.catch(() => alert('Service Unavailable error message'));
}

function setOffices(offices: Array<any>): Action {
	return {
		type: SET_OFFICES,
		payload: {
			offices
		}
	}
}

function addOffice(office: Office): Action {
	return {
		type: ADD_OFFICE,
		payload: {
			office
		}
	}
}

function editOffice(office: Office): Action {
	return {
		type: EDIT_OFFICE,
		payload: {
			office
		}
	}
}

function removeOffice(officeId: string): Action {
	return {
		type: REMOVE_OFFICE,
		payload: {
			officeId
		}
	}
}

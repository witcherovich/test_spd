// @flow
import type { Action } from '../flow-types';
import type { Office, T_SET_INITIAL_FORM_STATE, T_SET_FORM_STATE, T_SET_FORM_FIELD } from '../flow-types/officeFormTypes';

export const SET_INITIAL_FORM_STATE: T_SET_INITIAL_FORM_STATE = 'SET_INITIAL_FORM_STATE';
export const SET_FORM_STATE: T_SET_FORM_STATE = 'SET_FORM_STATE';
export const SET_FORM_FIELD: T_SET_FORM_FIELD = 'SET_FORM_FIELD';

export function setInitialFormState(): Action {
	return {
		type: SET_INITIAL_FORM_STATE
	}
}

export function setFormState(office: Office): Action {
	return {
		type: SET_FORM_STATE,
		payload: {
			office
		}
	}
}

export function setFormField(field: Object): Action {
	return {
		type: SET_FORM_FIELD,
		payload: {
			field
		}
	}
}

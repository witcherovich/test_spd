// @flow
import { SET_INITIAL_FORM_STATE, SET_FORM_STATE, SET_FORM_FIELD } from '../actionCreators';
import type { Office, OfficeFormActions } from '../flow-types/officeFormTypes';

const initialFormState: Office = {
	id: null,
	country: 'USA',
	stateOrProvince: '',
	postalCode: '',
	city: 'New York',
	streetAddress: '',
	address2: '',
	phone: '',
	fax: '',
	email: '',
	officeType: false 
};

export default function officeFormReducer(state: Office = initialFormState, action: OfficeFormActions): Office {
	switch(action.type) {
		case SET_FORM_STATE:
			const formState = action.payload.office;
			return {...state, ...formState};

		case SET_INITIAL_FORM_STATE:
			return {...initialFormState};

		case SET_FORM_FIELD:
			const field = action.payload.field;
			return {...state, ...field}

		default:
			return state;
	}
}

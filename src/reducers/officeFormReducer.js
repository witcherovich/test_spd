import { SET_INITIAL_FORM_STATE, SET_FORM_STATE, SET_FORM_FIELD } from '../actionCreators';

const initialFormState = {
	id: null,
	country: '',
	stateOrProvince: '',
	postalCode: '',
	city: '',
	streetAddress: '',
	address2: '',
	phone: '',
	fax: '',
	email: '',
	officeType: false 
};

export default function officeFormReducer(state = initialFormState, { type, payload }) {
	switch(type) {
		case SET_FORM_STATE:
			const formState = payload.office;
			return {...state, ...formState};

		case SET_INITIAL_FORM_STATE:
			return {...initialFormState};

		case SET_FORM_FIELD:
			const field = payload.field;
			return {...state, ...field}

		default:
			return state;
	}
}

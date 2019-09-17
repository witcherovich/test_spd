import { SET_INITIAL_FORM_STATE, SET_FORM_STATE } from '../actionCreators';

const initialFormState = {
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
			return initialFormState;

		default:
			return state;
	}
}

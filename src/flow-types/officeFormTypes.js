// @flow
export type T_SET_INITIAL_FORM_STATE = 'SET_INITIAL_FORM_STATE'; 
export type T_SET_FORM_STATE = 'SET_FORM_STATE';
export type T_SET_FORM_FIELD = 'SET_FORM_FIELD';

export type Office = {
	+id: string | null,
	+country: string,
	+stateOrProvince: string,
	+postalCode: string,
	+city: string,
	+streetAddress: string,
	+address2: string,
	+phone: string,
	+fax: string,
	+email: string,
	+officeType: boolean 
};
export type OfficeFormActions =
	| { type: T_SET_FORM_STATE, payload: { office: Office } }
	| { type: T_SET_INITIAL_FORM_STATE }
	| { type: T_SET_FORM_FIELD, payload: { field: Object } };

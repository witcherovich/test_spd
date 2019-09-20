// @flow
import type { Office } from './officeFormTypes';

export type T_SET_OFFICES = "SET_OFFICES";
export type T_ADD_OFFICE = "ADD_OFFICE";
export type T_EDIT_OFFICE = "EDIT_OFFICE";
export type T_REMOVE_OFFICE = "REMOVE_OFFICE";

export type OfficesState = Array<Office>;
export type OfficesActions =
	| { type: T_SET_OFFICES, payload: { offices: OfficesState } }
	| { type: T_ADD_OFFICE, payload: { office: Office } }
	| { type: T_EDIT_OFFICE, payload: { office: Office } }
	| { type: T_REMOVE_OFFICE, payload: { officeId: string } }

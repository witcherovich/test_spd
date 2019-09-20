// @flow
import type { Office, OfficeFormActions } from '../flow-types/officeFormTypes';
import type { OfficesState, OfficesActions } from '../flow-types/officesTypes';

export type State = Office & OfficesState;
export type Action = OfficesActions | OfficeFormActions;

export type Dispatch = (action: Action) => void;

// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { Office, OfficeFormActions } from '../flow-types/officeFormTypes';
import type { OfficesState, OfficesActions } from '../flow-types/officesTypes';

export type State = Office & OfficesState;
export type Action = OfficesActions | OfficeFormActions;
export type ThunkAction = (...args: Array<any>) => (dispatch: Dispatch) => any;

export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action | ThunkAction>;

import { combineReducers } from 'redux';

import offices from './officesReducer';
import officeForm from './officeFormReducer';

export default combineReducers({
	offices,
	officeForm
});

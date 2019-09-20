// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import mainReducer from './reducers/';
import type { Store } from './flow-types';

import App from './components/App/App.jsx';

import './index.css';

const store: Store = createStore(mainReducer, applyMiddleware(thunk));

const root = document.getElementById('root');

if (!root) {
	throw new Error("Couldn't find element with id root");
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, root
);

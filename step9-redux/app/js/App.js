import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {createStore} from 'redux';
import AppReducer from './reducers';
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';

let store = createStore(AppReducer);

ReactDOM.render(
	<Provider store={store}> 
		<Router history={hashHistory}> 
			{ routes } 
		</Router>
	</Provider>
	,
    document.getElementById('app')
);

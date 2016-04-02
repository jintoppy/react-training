import React from 'react';
import Main from '../components/Main';
import Page1 from '../components/Page1';
import Home from '../components/Home';

import { Route, IndexRoute } from 'react-router';

export default (
		<Route path="/" component={Main}>
			<Route path="page1" component={Page1} />
			<IndexRoute component={Home} />
		</Route>
	);

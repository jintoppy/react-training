import React from 'react';
import Main from '../components/Main';
import Home from '../containers/Home';

import { Route, IndexRoute } from 'react-router';

export default (
		<Route path="/" component={Main}>
			<IndexRoute component={Home} />
		</Route>
	);

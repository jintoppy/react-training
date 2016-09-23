import React from 'react';
import Main from '../components/Main';
import Page1 from '../components/Page1';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Github from '../components/Github';

import { Route, IndexRoute } from 'react-router';

export default (
		<Route path="/" component={Main}>
			<Route path="page1" component={Page1} />
			<Route path="contact" component={Contact} />
			<Route path="github/:username" component={Github} />
			<IndexRoute component={Home} />
		</Route>
	);

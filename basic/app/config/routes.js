var React = require('react');
var Router = require('react-router');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profile');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;


module.exports = (
		<Route path="/" component={Main}>
			<Route path="profile/:username" component={Profile} />
			<IndexRoute component={Home} />
		</Route>
);

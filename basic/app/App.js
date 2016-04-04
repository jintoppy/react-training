var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./config/routes');
var hashHistory = Router.hashHistory;
ReactDOM.render(
	<Router history={hashHistory}>
		{routes}
	</Router>,
	document.getElementById('app')
);


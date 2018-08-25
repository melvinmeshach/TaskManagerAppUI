import React from 'react';
import { Route, IndexRoute, browserHistory, IndexRedirect, Redirect } from 'react-router';
import DashBoard from './components/Dashboard.jsx';

export default (
		<Route path="/" component={DashBoard}>
		</Route>
);
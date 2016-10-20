import app from 'app';

import 'styles/session.scss';
import './signin/signin.js';

app.config($stateProvider =>
	$stateProvider.state('session', {
		url: '/session',
		component: 'session',
		abstract: true
	})
);

app.component('session', {
	template: '<ui-view class="session"></ui-view>'
});

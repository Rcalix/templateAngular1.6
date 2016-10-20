import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';
import angularJWT from 'angular-jwt';

import 'styles/base.scss';

const app = angular.module('app', [uiRouter, ngCookies, angularJWT]);

app.constant('endpoint', '/api');

app.config(function($compileProvider) {
	$compileProvider.debugInfoEnabled(true);
});

app.config(($stateProvider, $urlRouterProvider) => {
	$urlRouterProvider.otherwise('/');
});

app.config(($httpProvider, jwtOptionsProvider) => {
	jwtOptionsProvider.config({
		tokenGetter: session => session.token(),
		whiteListedDomains: ['localhost']
	});

	$httpProvider.interceptors.push('jwtInterceptor');
});

export default app;

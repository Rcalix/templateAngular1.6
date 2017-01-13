import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'styles/base.scss';

const app = angular.module('app', [uiRouter]);

app.config(function($compileProvider) {
	$compileProvider.debugInfoEnabled(true);
});

app.config(($stateProvider, $urlRouterProvider) => {
	$urlRouterProvider.otherwise('/home');
});

export default app;

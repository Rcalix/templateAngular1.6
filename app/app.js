import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

const app = angular.module('app', [uiRouter, ngMaterial]);

app.config(function ($compileProvider) {
	$compileProvider.debugInfoEnabled(true)
});

app.config(($stateProvider, $urlRouterProvider) => {
	$urlRouterProvider.otherwise('/');
});

app.config(['$mdIconProvider', function($mdIconProvider) {
     $mdIconProvider.icon('md-close', 'img/icons/ic_close_24px.svg', 24);
}]);

export default app;

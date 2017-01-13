import app from 'app';
import view from 'views/helloWorld.html';

app.config(function($stateProvider) {
	$stateProvider.state('home', {
		url: '/home',
		templateProvider: function() {
			return '<hello-world></hello-world>';
		}
	});
});

app.directive('helloWorld', function() {
	return {
		restrict: 'E',
		templateUrl: view,
		bindToController: true,
		controllerAs: '$ctrl',
		controller: function() {
			this.sayHello = () => {
				alert('Hello!');
			};
		}
	}
});

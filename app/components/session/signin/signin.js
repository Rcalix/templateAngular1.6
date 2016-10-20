import app from 'app';
import view from './signin.html';

app.config($stateProvider =>
	$stateProvider.state('session.signin', {
		url: '/signin',
		component: 'signin',
		skipAuth: true
	})
);

app.component('signin', {
	templateUrl: view,
	controller: function($state, $cookies, session) {
		this.user = {
			email: 'seich@martianwabbit.com',
			password: 'password'
		};

		this.signin = (form) => {
			form.$setValidity('badCredentials', true);

			session.create(this.user)
				.then(res => {
					$cookies.put('jwt', res.data.token);
					$state.go('layout');
				})
				.catch(err => {
					form.$setValidity('badCredentials', false);
				});
		};
	}
});

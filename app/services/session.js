import app from 'app';

app.provider('session', function(endpoint) {
	var cookieName = 'jwt';

	return {
		$get: function($http, $cookies, jwtHelper) {
			return {
				create: ({ email, password }) => $http({
					method: 'POST',
					url: `${endpoint}/session`,
					skipAuthorization: true,
					data: {
						email,
						password
					}
				}),

				exists: () => {
					let token = $cookies.get(cookieName);
					let tokenExists = angular.isDefined(token);

					return tokenExists && !jwtHelper.isTokenExpired(token);
				},

				token: () => $cookies.get(cookieName),

				destroy: () => $cookies.remove(cookieName)
			};
		}
	};
});

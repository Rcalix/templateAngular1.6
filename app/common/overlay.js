import app from 'app';

import 'styles/overlays.scss';

app.provider('overlay', function() {
	var element;

	return {
		$get: function($rootScope, $compile, $controller, $animate) {
			return function(config) {
				var settings = {
					template: `<div class="overlay" ng-click="onClick($event)"></div>`,
					onClick: angular.noop,
					removeOnClick: false
				};

				angular.extend(settings, config);

				return {
					show: function() {
						let scope = $rootScope.$new();
						element = $compile(settings.template)(scope);

						scope.onClick = settings.onClick;

						if (settings.removeOnClick) {
							scope.onClick = (e) => {
								this.hide();
								settings.onClick(e);
							};
						}

						return $animate.enter(element, document.body);
					},

					hide: function() {
						if (angular.isUndefined(element)) return;

						return $animate.leave(element);
					}
				};
			};
		}
	};
});

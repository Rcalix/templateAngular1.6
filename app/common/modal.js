import app from 'app';
import 'common/overlay';
import 'styles/modals.scss';

app.provider('modal', function() {
	return {
		$get: function($templateRequest, $q, $rootScope, $compile, $controller, $animate, overlay) {
			return function(config) {
				var template;
				var element;
				var settings = {
					controllerAs: '$modal',
					controller: angular.noop,
					onClose: angular.noop,
					values: {}
				};

				angular.extend(settings, config);

				if (settings.templateUrl) {
					template = $templateRequest(settings.templateUrl);
				} else if (settings.template) {
					template = $q.resolve(settings.template);
				} else {
					throw new Error('No template provided');
				}

				return {
					open: function(values = {}) {
						template.then(tpl => {
							var scope = $rootScope.$new();
							var ctrl = $controller(settings.controller, { $scope: scope });

							ctrl.close = this.close;

							Object.keys(settings.values).forEach(b => ctrl[b] = settings.values[b]);
							Object.keys(values).forEach(b => ctrl[b] = values[b]);

							scope[settings.controllerAs] = ctrl;

							element = $compile(tpl)(scope);

							overlay({
								removeOnClick: true,
								onClick: () => ctrl.close()
							}).show();

							return $animate.enter(element, document.body);
						});
					},

					close: function() {
						settings.onClose();
						return $animate.leave(element);
					}
				};
			};
		}
	};
});

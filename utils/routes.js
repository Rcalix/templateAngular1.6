module.exports = function(settings) {
	return function(server, config, rethinkdb, helpers) {
		let endpoints = settings.endpoints({
			r: rethinkdb,
			Boom: require('boom'),
			Joi: require('joi'),
			logger: require('./logger')(config),
			server,
			config,
			H: helpers
		});

		if (typeof settings.namespace !== 'undefined') {
			endpoints.forEach((e) => {
				e.path = settings.namespace + e.path;
			});
		}

		server.route(endpoints);
	};
};

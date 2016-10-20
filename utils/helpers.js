const glob = require('glob');

module.exports = function(config, rethinkdb) {
	var helpers = {};

	glob.sync('./helpers/*.js').forEach(file => {
		var helper = file.replace('.js', '').split('/').reverse()[0];
		helper = helper.charAt(0).toUpperCase() + helper.slice(1);

		helpers[helper] = require.main.require(file)({
			r: rethinkdb,
			Joi: require('joi'),
			logger: require('./logger')(config),
			config
		});
	});

	return helpers;
};

var env = typeof process.env.NODE_ENV === 'undefined' ? 'development' : process.env.NODE_ENV;

console.info(`Running as ${env}`);

var environments = {
	development: {
		SECRET: 'somesecret',
		rethinkdb: {
			db: 'app'
		},
		logLevel: 'debug',
		port: 9000
	}
};

environments[env]['environment'] = env;

module.exports = environments[env];

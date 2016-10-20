const config = require('./config');
const Hapi = require('hapi');
const glob = require('glob');
const rethinkdb = require('rethinkdbdash')(config.rethinkdb);
const server = new Hapi.Server();

const routes = require('./utils/routes');
const helpers = require('./utils/helpers')(config, rethinkdb);

server.connection({ port: config.port, routes: { cors: true } });

server.register(require('hapi-auth-jwt2'), (err) => {
	server.auth.strategy('jwt', 'jwt', {
		key: config.SECRET,
		validateFunc: helpers.User.validate,
		verifyOptions: { algorithms: ['HS256'] }
	});

	server.auth.default('jwt');

	glob('./services/*.js', function(err, files) {
		files.forEach(f => routes(require(f))(server, config, rethinkdb, helpers));
		server.start(err => console.log(`Server running at: ${server.info.uri}`));
	});
});

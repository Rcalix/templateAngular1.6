const config = require('../config');
const r = require('rethinkdbdash')(config.rethinkdb);

exports.up = function(next) {
	next();
};

exports.down = function(next) {
	next();
};

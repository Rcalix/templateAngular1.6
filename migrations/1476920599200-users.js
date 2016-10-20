const config = require('../config');
const r = require('rethinkdbdash')(config.rethinkdb);

exports.up = function(next) {
	r.tableCreate('users').then(() => next());
};

exports.down = function(next) {
	r.tableDrop('users').then(() => next());
};

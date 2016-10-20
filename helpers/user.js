const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = ({ r, Joi, config }) => ({
	create: function({ email, password }) {
		return new Promise(function(resolve, reject) {
			bcrypt.hash(password, 10, (err, hash) => {
				r.table('users').insert({
					email,
					password: hash
				}).then(res => resolve({
					id: res.generated_keys[0],
					email
				}));
			});
		});
	},

	token: function(user) {
		var token = jwt.sign({
			user
		}, config.SECRET, { expiresIn: '1d' });

		return { token };
	},

	exists: function(email) {
		return r.table('users').filter({ email }).count()
			.then(res => res > 0);
	},

	validate: function(token, req, cb) {
		r.table('users')
			.get(token.user.id)
			.then(res => cb(null, res !== null));
	}
});

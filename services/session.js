const bcrypt = require('bcryptjs');

module.exports = {
	namespace: '/session',
	endpoints: ({ r, Joi, Boom, H }) => [{
		path: '',
		method: 'POST',
		config: {
			auth: false,
			handler: function(req, reply) {
				r.table('users')
					.filter({ email: req.payload.email })
					.then(users => {
						if (users.length === 0) {
							return reply(Boom.notFound('No user with that email found.'));
						}

						bcrypt.compare(req.payload.password, users[0].password, (err, valid) => {
							if (!valid) {
								return reply(Boom.forbidden('The credentials are not valid.'));
							}

							delete users[0].password;

							reply(H.User.token(users[0]));
						});
					});
			},
			validate: {
				payload: Joi.object().keys({
					email: Joi.string().email().lowercase(),
					password: Joi.string()
				})
			}
		}
	}]
}

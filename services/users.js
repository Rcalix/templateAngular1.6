module.exports = {
	namespace: '/users',
	endpoints: ({ r, Joi, logger, Boom, H }) => [{
		path: '',
		method: 'POST',
		config: {
			auth: false,
			handler: function(req, reply) {
				H.User.exists(req.payload.email)
					.then(exists => {
						if (exists) {
							let error = Boom.badRequest('Validation Error');

							error.output.payload.details = {
								key: 'email',
								message: 'Email is already taken.'
							};

							return reply(error);
						}

						H.User.create(req.payload)
							.then(user => reply(H.User.token(user)).created(`/users/${user.id}`));
					});
			},
			validate: {
				payload: Joi.object().keys({
					email: Joi.string().email().lowercase(),
					password: Joi.string().min(6)
				})
			}
		}
	}]
}

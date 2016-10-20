const winston = require('winston');

module.exports = function(config) {
	var logger = new winston.Logger({
		level: config.logLevel,
		transports: [
			new (winston.transports.Console)()
		]
	});

	if (config.environment === 'production') {
		logger.add(require('winston-daily-rotate-file'), {
			dirname: './logs',
			handleExceptions: true,
    		humanReadableUnhandledException: true
    	});
	}

	return logger;
};

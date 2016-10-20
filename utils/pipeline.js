var WebpackDevServer = require('webpack-dev-server');
var Webpack = require('webpack');
var WebpackConfig = require('../webpack.config');
var config = require('../config');

WebpackConfig.entry.app.unshift('webpack-dev-server/client?http://localhost:8080/', 'webpack/hot/dev-server');

var compiler = Webpack(WebpackConfig);
var server = new WebpackDevServer(compiler, {
	contentBase: 'http://localhost:8080/',
	hot: true,
	inline: true,
	proxy: {
		'/api': {
			target: `http://localhost:${config.port}`,
			pathRewrite: {'^/api' : ''}
		}
	},
	clientLogLevel: 'info',
	quiet: false,
	noInfo: false,
	publicPath: '/',
	stats: { colors: true }
});

server.listen(8080);

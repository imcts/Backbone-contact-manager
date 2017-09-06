import path from 'path'

export default {
	target: 'web',
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015'],
						plugins: ['transform-runtime']
					}
				}
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, '/'),
		compress: true,
		port: 3000
	}
}

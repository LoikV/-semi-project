let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "style.css",
});
const HtmlWebpackPlugin = require('html-webpack-plugin');
let conf = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: "main.js",
		publicPath: ''
	},
	devServer: {
		watchContentBase: true,
		contentBase: './dist',
		overlay: true
	},
	module: {
		rules: [
			{
			test:/\.js$/,
			loader: 'babel-loader'
			//exclude: '/node_modules/'
			},
			// {
			// 	test: /\.(png|gif|jpe?g)$/i,
			// 	use: [
			// 		{
			// 			loader: 'url-loader',
			// 			options: {
			// 				limit: 8000,   //лимит конвектирование в css и срабатывания url-loader
			// 				name: '[path][name].[ext]',
			// 			}
			// 		},
			// 	],
			// },
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options:{
							name: '[name].[ext]'
						}
					}
				]
			},
			{
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[ext]'
              // name: '[path][name].[ext]',
            }
          }
        ]
      },
			{
			test: /\.sass$/,
			 use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
			//exclude: '/node_modules/'
			}
	 	]  
	},
	plugins: [
		extractSass,
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false,
    })
	]
	
};
module.exports = (env,options) => {
	let production = options.mode === 'production';

	conf.devtool = production ? false : 'eval-sourcemap';

	return conf;
}













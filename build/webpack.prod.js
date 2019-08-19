const path = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = {
    entry: './src/main.js',
    output: {
        filename: 'main.[hash].js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractPlugin.extract({
                    fallback: "style-loader",
			        use: ["css-loader", "sass-loader"]
                })
            }
        ]
    },
    resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
		}
	},
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new VueLoaderPlugin(),
        new ExtractPlugin('[name].[hash].css'),
        //  remove all files inside webpack's output.path directory,
        new CleanWebpackPlugin(),
    ]
}

module.exports = config;
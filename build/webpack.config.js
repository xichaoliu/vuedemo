const path = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');
function resolve (dir) {
    return path.join(__dirname, '..', dir)
  }
const extractSass = new ExtractPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});
const config = {
    entry: './src/main.js',
    output: {
        filename: 'main-[hash].js',
        chunkFilename: '[name].bundle.js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        'babelrc': false,
                        'plugins': [
                            "dynamic-import-webpack"
                        ]
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                loader: extractSass.extract({
                    fallback: "style-loader",
			        use: ["css-loader", "sass-loader"]
                })
            }
        ]
    },
    resolve: {
		alias: {
            vue: 'vue/dist/vue.js',
            '@': resolve('src')
		}
	},
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new VueLoaderPlugin(),
        new ExtractPlugin('[name].css')
    ]
}

module.exports = config;
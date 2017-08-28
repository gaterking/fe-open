const path = require('path');
const webpack = require('webpack');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.base.config');
module.exports = merge.smart(baseConfig, {
    output: {
        path: path.resolve(__dirname, "../sample/"),
        filename: "[name].js",
        publicPath: '/js/',
    },
    plugins:[
       new webpack.HotModuleReplacementPlugin(),
       new webpack.SourceMapDevToolPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "../sample"),
        compress: true,
        port: 9000,
        host: "0.0.0.0"
    }
});
const path = require('path');
const webpack = require('webpack');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.base.config');
module.exports = merge.smart(baseConfig, {
    plugins: [new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false,
        }
    })]
});
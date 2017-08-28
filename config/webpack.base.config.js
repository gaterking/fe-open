const path = require('path');
const webpack = require('webpack');
var webpackBaseConfig = {
    entry: {
        "feeopen_web":"./src/feeopen.web",
        "feeopen_web.duobao":"./src/feeopen.web.duobao"
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: '/',
        filename: "[name].min.js",
        library: "feeopen_web",
        libraryTarget: "umd"
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};
module.exports = webpackBaseConfig;
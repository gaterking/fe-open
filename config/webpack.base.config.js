const path = require('path');
const webpack = require('webpack');
var webpackBaseConfig = {
    entry: {
        "feopen_web":"./src/index",
        "feopen_web.duobao":"./src/business/feopen.web.duobao",
        "feopen_web.404":"./src/business/feopen.web.404"
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: '/',
        filename: "[name].min.js",
        library: "feopen_web",
        libraryTarget: "umd"
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};
module.exports = webpackBaseConfig;
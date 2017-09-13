const path = require('path');
const webpack = require('webpack');
const version = require("../package.json").version;
var webpackBaseConfig = {
    entry: {
        "feopen_web": "./src/index",
        "feopen_web.duobao": "./src/business/feopen.web.duobao",
        "feopen_web.404": "./src/business/feopen.web.404"
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: '/' + version + '/',
        filename: "[name]_" + version + ".min.js",
        library: "feopen_web",
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
                'url-loader?limit=100000',
                'img-loader'
            ]
        }]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            //VERSION: "'"+version+"'"
        })
    ]
};
module.exports = webpackBaseConfig;
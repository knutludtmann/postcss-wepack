const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app.js'
    },
    plugins: [
        new ExtractTextPlugin('[name].bundle.css'),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3006,
            server: { baseDir: ['./'] }
        }),
    ],
    watch: true,
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                loader: 'css-loader?importLoaders=1!postcss-loader'
            }),
        }, ],
    },
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: '[name].bundle.css'
    }
}
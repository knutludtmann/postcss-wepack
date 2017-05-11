const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    lost = require('lost');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            exclude: ['/node_modules/'],
            use: ExtractTextPlugin.extract({
                /* fallbackLoader: 'style-loader', //importLoaders=1? */
                loader: [
                    { loader: 'css-loader', query: { sourceMap: true } },
                    { loader: 'postcss-loader', query: { sourceMap: true } }
                ],
            }),
        }, ],
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3006,
            server: { baseDir: ['./'] }
        }),
        new ExtractTextPlugin('[name].bundle.css'),
    ],

    devtool: 'source-map',
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: '[name].bundle.css'
            /*,
                    sourceMapFilename: '[file].map'*/
    }
}
const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    lost = require('lost'),
    StyleLintPlugin = require('stylelint-webpack-plugin'),
    KssWebpackPlugin = require('kss-webpack-plugin');

const KssConfig = {
    source: path.resolve(__dirname, 'src')
};

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
                loader: [{
                        loader: 'css-loader',
                        query: {
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        query: {
                             sourceMap: true
                         }
                    }
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
        new StyleLintPlugin({
            configFile: '.stylelintrc',
            context: 'src',
            files: '**/*.css',
            failOnError: false,
            quiet: false,
        }),
        new KssWebpackPlugin(KssConfig)

    ],

    devtool: 'source-map',
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: '[name].bundle.css'
    }
}
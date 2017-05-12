module.exports = {
    plugins: {
        'postcss-import': {},
        'lost': {},
        'postcss-cssnext': {
            browsers: ['last 2 versions', '> 5%', 'Firefox > 20', 'Opera 12.1'],
        },
        'cssnano': { discardComments: false }
    },
};
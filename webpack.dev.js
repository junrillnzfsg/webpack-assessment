const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

const config = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }
};

module.exports = merge(common, config);
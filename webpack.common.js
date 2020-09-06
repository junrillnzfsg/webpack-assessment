const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ROOT = path.resolve(__dirname, 'src');

module.exports = {
    context: ROOT,
    entry: {
        main: path.resolve(ROOT, 'js/index.js'),
        vendorOne: path.resolve(ROOT, 'js/vendors/vendor1.js'),
        vendorTwo: path.resolve(ROOT, 'js/vendors/vendor2.js')
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: ['babel-loader']
            }
        ]
    }
}

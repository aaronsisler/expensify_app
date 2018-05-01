const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './src/app.js',
    // entry: './src/playground/hoc.js',
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    }
};
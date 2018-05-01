const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        entry: './src/app.js',
        // entry: './src/playground/hoc.js',
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js',
        },
        plugins: [
            CSSExtract
        ]
    }
}
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: "file-loader"
                }],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
            test: /\.(s*)css$/,
            use: [
                {
                loader: MiniCssExtractPlugin.loader,
                },
                'css-loader',
                'sass-loader'
            ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
        filename: '.assets/[name].css'
    }),
],
};
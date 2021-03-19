const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    devtool: 'inline-source-map',
    resolve: {
        alias: {
            '@/images': path.join(__dirname, '../src/images'),
            '@/components': path.join(__dirname, '../src/components'),
            '@/utils': path.resolve(__dirname, '../src/utils'),
            '@/typeings': path.resolve(__dirname, '../src/typeings'),
            '@/constants': path.resolve(__dirname, '../src/constants'),
            '@/services': path.resolve(__dirname, '../src/services'),
        },
        extensions: ['.ts', '.tsx', '.js', '.css', '.less']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'awesome-typescript-loader',
                exclude: /node_modules/,
            },
            {
                // 在 src 中的 css, less，开启css-module
                test: /\.(css|less)$/,
                include: path.join(__dirname, '../src'),
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    },
                    'less-loader'
                ]
            },
            // 在 node_modules 中的 css，不开启
            {
                test: /\.(css|less)$/,
                include: /node_modules/,
                use: [
                    'style-loader', 'css-loader', 'less-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader'
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
        }),
    ]
};
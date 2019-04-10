const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/main.jsx"
    },
    mode: "development",
    output: {
        filename: "main-bundle.js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: '/',
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["react-app"]
                    }
                }
            }, {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                }),
            },
            {
                test: /\.html$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                        loader: "file-loader"
                    },
                    {
                        loader: "extract-loader"
                    },
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ["img:src"]
                        }
                    }
                ]
            }, {
                test: /\.(jpg|png)$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "images/[name]-[hash:8]/[ext]"

                    }
                }]
            }
        ]
    },
    plugins: [
        new CopyPlugin([{
            from: './src/index.html',
            to: './index.html'
        }, ]),
        new ExtractTextPlugin("main.css"),
    ],
}
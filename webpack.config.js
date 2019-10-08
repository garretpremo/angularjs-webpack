const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(_path) {
    return path.resolve(__dirname, _path);
}

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: resolve("dist") 
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]
};